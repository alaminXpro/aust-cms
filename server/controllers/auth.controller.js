import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
const lifetime = "3600000";

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
      .cookie('access_token', token, {
        maxAge: lifetime,
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      })
      .status(200)
      .json({...rest, token});
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
      .cookie('access_token', token, {
        maxAge: lifetime,
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      })
        .status(200)
        .json({...rest, token});
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
      .cookie('access_token', token, {
        maxAge: lifetime,
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      })
        .status(200)
        .json({...rest, token});
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token',{
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
}
