const sslcommerzService = require('../services/sslcommerz.service');
const { getUserById } = require('../services/user.service');
const { getClubById, addUserToPendingList } = require('../services/club.service');
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const initiatePayment = catchAsync(async (req, res) => {
  const user = await getUserById(req.body.userId);
  if (!user) {
    return res.status(httpStatus.BAD_REQUEST).send({error: 'User not found' });
  }
  const club = await getClubById(req.body.clubId);
  if (!club) {
    return res.status(httpStatus.BAD_REQUEST).send({ error: 'Club not found' });
  }
  user.userPhone = req.body.userPhone;
  const GatewayPageURL = await sslcommerzService.initPayment(user, club);
  res.send({url: GatewayPageURL});
});

const paymentSuccess = catchAsync(async (req, res) => {
  const transaction = await sslcommerzService.findTransaction(req.body.tran_id);
  if (!transaction) {
    return res.redirect(`http://localhost:5173/payment-failed/${req.body.tran_id}`);
  }
  const response = await sslcommerzService.validatePayment(req.body.val_id);
  if(!response || response.status !== 'VALID') {
    // Remove transaction if payment is not valid
    await transaction.deleteOne();
    return res.redirect(`http://localhost:5173/payment-failed/${req.body.tran_id}`);
  }
  transaction.paymentStatus = 'PAID';
  await transaction.save();
  await addUserToPendingList(transaction.clubId, transaction.userId);
  console.log('Payment successful: ', transaction);
  res.redirect(`http://localhost:5173/payment-success/${req.body.tran_id}`);
});

const paymentFail = catchAsync(async (req, res) => {
  console.log('Payment failed: ', req.body);
  const transaction = await sslcommerzService.findTransaction(req.body.tran_id);
  if (transaction) {
    await transaction.deleteOne();
  }
  res.redirect(`http://localhost:5173/payment-failed/${req.body.tran_id}`);
});

const paymentCancel = catchAsync(async (req, res) => {
  const transaction = await sslcommerzService.findTransaction(req.body.tran_id);
  if (transaction) {
    await transaction.deleteOne();
  }
  res.redirect(`http://localhost:5173/payment-cancel/${req.body.tran_id}`);
});

const getTranByUserId = catchAsync(async (req, res) => {
  const transactions = await sslcommerzService.getTranByUserId(req.params.userId);
  if (!transactions) {
    return res.status(httpStatus.BAD_REQUEST).send({ error: 'Transaction not found' });
  }
  res.send(transactions);
});

const getTranByClubId = catchAsync(async (req, res) => {
  const transactions = await sslcommerzService.getTranByClubId(req.params.clubId);
  if (!transactions) {
    return res.status(httpStatus.BAD_REQUEST).send({ error: 'Transaction not found' });
  }
  res.send(transactions);
});

module.exports = {
  initiatePayment,
  paymentSuccess,
  paymentFail,
  paymentCancel,
  getTranByUserId,
  getTranByClubId,
};