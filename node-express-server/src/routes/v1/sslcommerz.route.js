const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const sslcommerzValidation = require('../../validations/sslcommerz.validation');
const sslcommerzController = require('../../controllers/sslcommerz.controller');

const router = express.Router();

router
    .route('/initiate')
    .post(auth(),validate(sslcommerzValidation.paymentInitiateSchema), sslcommerzController.initiatePayment);
router
    .route('/success/:tran_id')
    .post(validate(sslcommerzValidation.paymentSuccessSchema), sslcommerzController.paymentSuccess);

router
    .route('/failed/:tran_id')
    .post(sslcommerzController.paymentFail);

router
    .route('/cancel/:tran_id')
    .post(sslcommerzController.paymentCancel);
router
    .route('/transaction/:userId')
    .get(auth('manageClubs'), validate(sslcommerzValidation.getTransactionSchema), sslcommerzController.getTranByUserId);

router
    .route('/transaction/club/:clubId')
    .get(auth('manageClubs'), validate(sslcommerzValidation.getTransactionByClubId), sslcommerzController.getTranByClubId);

module.exports = router;
