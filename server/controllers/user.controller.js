import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
  res.status(200).json({
    message: 'Api route is working!',
  });
};

export const updateUser = async (req, res, next) => {
  console.log('Request body:', req.body); // Log the request body
  console.log('Request user:', req.user); // Log the authenticated user info
  console.log('User ID from token:', req.user.id);
  console.log('User ID from request params:', req.params.id);

  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update your own account!'));

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (!updatedUser) {
      return next(errorHandler(404, 'User not found!'));
    }

    const { password, ...rest } = updatedUser._doc;
    console.log('Updated user:', rest); // Log the updated user info

    // Include the token in the response
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};



export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only delete your own account!'));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("token",{
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    res.status(200).json('User has been deleted!');
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

export const getUser = async (req, res, next) => {
  try {
    
    const user = await User.findById(req.params.id);
  
    if (!user) return next(errorHandler(404, 'User not found!'));
  
    const { password: pass, ...rest } = user._doc;
  
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const getUserByUsername = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return next(errorHandler(404, 'User not found!'));
    const { password: pass, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    const sanitizedUsers = users.map(user => {
      const { password, ...rest } = user._doc;
      return rest;
    });
    res.status(200).json(sanitizedUsers);
  } catch (error) {
    next(error);
  }
};
