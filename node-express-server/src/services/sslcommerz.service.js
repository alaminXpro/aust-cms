const SSLCommerzPayment = require('sslcommerz-lts');
const Order = require('../models/order.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const config = require('../config/config');
const { v4: uuidv4 } = require('uuid');
const Club = require('../models/club.model');

const createOrder = async (user, club) => {

   const tran_id = uuidv4();

  try {
    // Create payment object
    const payment = new Order({
      tranId: tran_id,
      amount: process.env.PAYMENT_AMOUNT,
      userName: user.name,
      userEmail: user.email,
      userPhone: user.userPhone,
      userId: user.id,
      clubId: club.id,
    });

    //console.log('Payment:', payment);

    // Save the payment object to the database
    await payment.save();

    // Payment data for SSLCommerz
    const paymentData = {
      total_amount: process.env.PAYMENT_AMOUNT,
      currency: 'BDT',
      tran_id: tran_id,
      success_url: `${config.serverURL}/v1/sslcommerz/success/${tran_id}`,
      fail_url: `${config.serverURL}/v1/sslcommerz/failed/${tran_id}`,
      cancel_url: `${config.serverURL}/v1/sslcommerz/cancel/${tran_id}`,
      shipping_method: 'NO',
      product_name: club.name,
      product_category: 'Club',
      product_profile: 'general',
      cus_name: user.name,
      cus_email: user.email,
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: user.userPhone,
      cus_fax: user.userPhone,
    };

    return paymentData;
  } catch (error) {
    // More detailed error message with the specific issue
    if (error instanceof ApiError) {
      throw error; // Propagate known errors
    }
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error creating order');
  }
};

/**
 * init SSLCommerz payment
 * @params {Object} order
 */

const initPayment = async (user, club) => {
  try {
    const paymentData = await createOrder(user, club);
    //console.log('Payment Data:', paymentData);

    const sslcz = new SSLCommerzPayment(
      config.sslcommerz.storeId,
      config.sslcommerz.storePassword,
      config.sslcommerz.isLive,
    );

    const apiResponse = await sslcz.init(paymentData);
    //console.log('API Response:', apiResponse);

    if (!apiResponse || !apiResponse.GatewayPageURL) {
      throw new ApiError(httpStatus.SERVICE_UNAVAILABLE, 'Failed to get payment gateway URL');
    }
    return apiResponse.GatewayPageURL;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error; // Propagate known errors
    }
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error initiating payment');
  }
};

const validatePayment = async (val_id) => {
    try {
        const sslcz = new SSLCommerzPayment(
        config.sslcommerz.storeId,
        config.sslcommerz.storePassword,
        config.sslcommerz.isLive,
        );

        const apiResponse = await sslcz.validate({
        val_id,
        });

        return apiResponse;
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error validating payment');
    }
};

const findTransaction = async (tran_id) => {
    const transaction = await Order.findOne({ tranId: tran_id });
    return transaction;
};

const getTranByUserId = async (userId) => {
    const transaction = await Order.findOne({ userId });
    return transaction;
}

const getTranByClubId = async (clubId) => {
   const club = await Club.findById(clubId);
   if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
   }
   const transactions = await Order.find({ clubId: club.id })
   .populate('userId clubId')
   .select('userName userPhone tranId amount currency paymentStatus createdAt userId clubId');
   return transactions;
}

module.exports = {
  initPayment,
  validatePayment,
  findTransaction,
  getTranByUserId,
  getTranByClubId,
};
