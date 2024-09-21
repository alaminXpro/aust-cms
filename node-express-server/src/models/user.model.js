const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    avatar: {
      type: String,
      default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
      private: true, // used by the toJSON plugin
    },
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    clubs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Club'
    }],
    // New fields
    department: {
      type: String,
      enum: ['CSE', 'EEE', 'CE', 'ME', 'BBA', 'TE', 'IPE', ''],
      default: '',
    },
    semester: {
      type: String,
      enum: ['1.1', '1.2', '2.1', '2.2', '3.1', '3.2', '4.1', '4.2', ''],
      default: '',
    },
    studentId: {
      type: String,
      unique: true,
      sparse: true,
    },
    bio: {
      type: String,
      maxlength: 500, // Adjust as needed
      default: '',
    },
    profession: {
      type: String,
      default: '',
    },
    skills: {
      type: [String], // Array of strings for multiple skills
      default: [],
    },
    phone: {
      type: String,
      validate(value) {
        if (value && value.length > 0 && !validator.isMobilePhone(value)) {
          throw new Error('Invalid phone number');
        }
      },
    },
    address: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      validate(value) {
        if (value && value.length > 0 && !validator.isURL(value)) {
          throw new Error('Invalid URL');
        }
      },
    },
    cv: {
      type: String, // This will store the URL of the uploaded CV
      default: '',
    },
    // Social media links
    linkedin: {
      type: String,
      validate(value) {
        if (value && value.length > 0 && !validator.isURL(value)) {
          throw new Error('Invalid LinkedIn URL');
        }
      },
    },
    twitter: {
      type: String,
      validate(value) {
        if (value && value.length > 0 && !validator.isURL(value)) {
          throw new Error('Invalid Twitter URL');
        }
      },
    },
    facebook: {
      type: String,
      validate(value) {
        if (value && value.length > 0 && !validator.isURL(value)) {
          throw new Error('Invalid Facebook URL');
        }
      },
    },
    github: {
      type: String,
      validate(value) {
        if (value && value.length > 0 && !validator.isURL(value)) {
          throw new Error('Invalid GitHub URL');
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if student ID is taken
 * @param {string} studentId - The user's student ID
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isStudentIdTaken = async function (studentId, excludeUserId) {
  const user = await this.findOne({ studentId, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
