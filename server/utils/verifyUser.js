import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

export const verifyToken = (req, res, next) => {
  const {token} = req.cookies;
  console.log('Token:', token); // Log the token
  if (!token) return next(errorHandler(401, 'You are not authenticated!'));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('Token verification error:', err); // Log the error
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      });
      return next(errorHandler(403, 'Token is not valid!'));
    }
    req.user = user;
    next();
  });
};
