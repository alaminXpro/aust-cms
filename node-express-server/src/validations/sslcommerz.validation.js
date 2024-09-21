const joi = require('joi');
const { objectId } = require('./custom.validation');
const { param } = require('../routes/v1/sslcommerz.route');

const paymentInitiateSchema = {
  body: joi.object().keys({
    clubId: joi.string().required().custom(objectId),
    userId: joi.string().required().custom(objectId),
    userPhone: joi.string().required(),
  }),
};

const paymentSuccessSchema = {
  params: joi.object().keys({
    tran_id: joi.string().required(),
  }),
};

const validateTransaction = {
  body: joi
    .object()
    .keys({
      val_id: joi.string().required(),
    })
    .unknown(true),
};

const getTransactionSchema = {
  params: joi.object().keys({
    userId: joi.string().required().custom(objectId),
  }),
};

const getTransactionByClubId = {
  params: joi.object().keys({
    clubId: joi.string().required().custom(objectId),
  }),
};

module.exports = {
  paymentInitiateSchema,
  validateTransaction,
  paymentSuccessSchema,
  getTransactionSchema,
  getTransactionByClubId,
};
