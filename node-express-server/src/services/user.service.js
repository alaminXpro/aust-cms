const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (userBody.studentId && await User.isStudentIdTaken(userBody.studentId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Student ID already taken');
  }
  return User.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (updateBody.studentId && (await User.isStudentIdTaken(updateBody.studentId, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Student ID already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

/**
 * Update user avatar
 * @param {ObjectId} userId
 * @param {string} avatarUrl
 * @returns {Promise<User>}
 */
const updateUserAvatar = async (userId, avatarUrl) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  user.avatar = avatarUrl;
  await user.save();
  return user;
};

/**
 * Update user CV
 * @param {ObjectId} userId
 * @param {string} cvUrl
 * @returns {Promise<User>}
 */
const updateUserCV = async (userId, cvUrl) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  user.cv = cvUrl;
  await user.save();
  return user;
};

/**
 * Change user password
 * @param {ObjectId} userId
 * @param {string} oldPassword
 * @param {string} newPassword
 * @returns {Promise<User>}
 */
const changeUserPassword = async (userId, oldPassword, newPassword) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (!(await user.isPasswordMatch(oldPassword))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Old password is incorrect');
  }
  user.password = newPassword;
  await user.save();
  return user;
};

/**
 * Get user by student ID
 * @param {string} studentId
 * @returns {Promise<User>}
 */
const getUserByStudentId = async (studentId) => {
  return User.findOne({ studentId })
    .select('-password -role') // Exclude password and role
    .populate('clubs', 'name logo')
    .exec();
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  updateUserAvatar,
  updateUserCV,
  changeUserPassword,
  getUserByStudentId,
};
