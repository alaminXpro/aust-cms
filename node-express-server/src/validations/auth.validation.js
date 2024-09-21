const Joi = require('joi');
const { password } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const customValidation = (value, helpers) => {
  if (!value.body.refreshToken && !value.cookies.refreshToken) {
    return helpers.response({ statusCode: 400, message: 'Custom error message' });
  }
  return value;
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().optional(),
  }).unknown(true),
  cookies: Joi.object().keys({
    refreshToken: Joi.string().optional(),
  }).unknown(true),
  custom: Joi.object().custom(customValidation, 'Custom validation').required(),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().optional(),
  }).unknown(true),
  cookies: Joi.object().keys({
    refreshToken: Joi.string().optional(),
    accessToken: Joi.string().optional(),
  }).unknown(true),
  custom: Joi.object().custom(customValidation, 'Custom validation').required(),
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

const googleAuth = {
  body: Joi.object().keys({
    credential: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  googleAuth,
};
