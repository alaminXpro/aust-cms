const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const ApiError = require('../utils/ApiError');
const config = require('../config/config');
const { OAuth2Client } = require('google-auth-library');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.cookie('accessToken', tokens.access.token, {
    expires: new Date(tokens.access.expires),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
  res.cookie('refreshToken', tokens.refresh.token, {
    expires: new Date(tokens.refresh.expires),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);

  res.cookie('accessToken', tokens.access.token, {
    expires: new Date(tokens.access.expires),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.cookie('refreshToken', tokens.refresh.token, {
    expires: new Date(tokens.refresh.expires),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.send({ user, tokens });
});

const client = new OAuth2Client(config.google.clientId);

const googleAuth = catchAsync(async (req, res) => {
  const { credential } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: config.google.clientId,
  });

  const payload = ticket.getPayload();
  const { email, name, picture } = payload;

  let user = await userService.getUserByEmail(email);
  if (!user) {
    user = await userService.createUser({
      email,
      name,
      avatar: picture,
      password: Math.random().toString(36).slice(-8), // Generate a random password
      isEmailVerified: true,
    });
  }

  const tokens = await tokenService.generateAuthTokens(user);

  res.cookie('accessToken', tokens.access.token, {
    expires: new Date(tokens.access.expires),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.cookie('refreshToken', tokens.refresh.token, {
    expires: new Date(tokens.refresh.expires),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.send({ user, tokens });
});

// Back-end Google Authentification
const googleSignIn = catchAsync(async (req, res) => {
  const user = req.user;
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.OK).send({ user, tokens });
});

const logout = catchAsync(async (req, res) => {
  const refreshToken = req.body.refreshToken || req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(httpStatus.BAD_REQUEST).send('Please authenticate');
  }

  await authService.logout(refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const refreshToken = req.body.refreshToken || req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(httpStatus.BAD_REQUEST).send('Please authenticate');
  }
  const tokens = await authService.refreshAuth(refreshToken);

  res.cookie('refreshToken', tokens.refresh.token, {
    expires: new Date(tokens.refresh.expires),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.cookie('accessToken', tokens.access.token, {
    expires: new Date(tokens.access.expires),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.status(200).send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = catchAsync(async (req, res) => {
  await authService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  googleAuth,
  googleSignIn,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
};
