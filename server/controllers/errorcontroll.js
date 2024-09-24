import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const lifetime = "3600000";

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true, // Enable debug mode
});

export const test = (req, res) => {
  res.status(200).json({
    message: 'Api route is working!',
  });
};

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    const otherUser = await User.findOne({ username }).select(["username"]);
    const otherEmail = await User.findOne({ email }).select(["email"]);

    if (otherUser) {
      return res.status(400).json({ error: "Username already in use" });
    }
    if (!email.includes('@aust.edu')) {
      return res.status(400).json({ error: "You must use your aust.edu mail!" });
    }
    if (otherEmail) {
      return res.status(400).json({ error: "Email already in use" });
    }
    await newUser.save();
    res.status(201).json('User created successfully!');
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found!'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: lifetime });
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('token', token, {
        maxAge: lifetime,
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    if (!req.body.email.includes('@aust.edu')) {
      return res.status(400).json({ error: "You must use your aust.edu mail!" });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
      .cookie("token", token, {
        maxAge: lifetime,
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
      .cookie("token", token, {
        maxAge: lifetime,
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("token",{
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};

export const deleteAllUser = async (req, res, next) => {
  try {
    await User.deleteMany();
    res.status(200).json('All users have been deleted!');
  } catch (error) {
    next(error);
  }
};

// Generate Password Reset Token
export const forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(errorHandler(404, 'User not found!'));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: 'Password Reset',
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return next(errorHandler(500, 'Error sending email!'));
      }
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Password reset link sent to your email!' });
    });
  } catch (error) {
    console.error('Error in forgotPassword:', error);
    next(error);
  }
};

// Reset Password
export const resetPassword = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return next(errorHandler(404, 'User not found!'));

    const hashedPassword = bcryptjs.hashSync(req.body.password, 10);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password has been reset!' });
  } catch (error) {
    console.error('Error in resetPassword:', error);
    next(error);
  }
};
