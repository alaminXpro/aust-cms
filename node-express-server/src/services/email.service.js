const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');

const transport = nodemailer.createTransport(config.email.smtp);
/* istanbul ignore next */
if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
}

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text) => {
  const msg = { from: config.email.from, to, subject, text };
  await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  const subject = 'Reset password';
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `${config.clientURL}/reset-password?token=${token}`;
  const text = `Dear user,
To reset your password, click on this link: ${resetPasswordUrl}
If you did not request any password resets, then ignore this email.`;
  await sendEmail(to, subject, text);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
  const subject = 'Email Verification for AUSTCMS';
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `${config.clientURL}/verify-email?token=${token}`;
  const text = `Dear AUST Student,

Welcome to AUSTCMS - the Club Management System for Ahsanullah University of Science and Technology!

We're excited to have you join our community. To complete your registration and start exploring the vibrant club life at AUST, please verify your email address by clicking on the link below:

${verificationEmailUrl}

This link will be active for the next 24 hours. If you don't verify your email within this time, you may need to request a new verification link.

If you didn't create an account on AUSTCMS, please disregard this email. Your information remains secure, and no action is required on your part.

Should you have any questions or need assistance, please don't hesitate to contact our support team.

Best regards,
The AUSTCMS Team
Ahsanullah University of Science and Technology`;

  await sendEmail(to, subject, text);
};

module.exports = {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
};
