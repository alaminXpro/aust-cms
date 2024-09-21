const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin', 'moderator'),
    avatar: Joi.string().uri(),
    department: Joi.string().valid('CSE', 'EEE', 'CE', 'ME', 'BBA', 'TE', 'IPE'),
    semester: Joi.string().valid('1.1', '1.2', '2.1', '2.2', '3.1', '3.2', '4.1', '4.2'),
    studentId: Joi.string(),
    bio: Joi.string().max(500),
    profession: Joi.string(),
    skills: Joi.array().items(Joi.string()),
    phone: Joi.string().pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/),
    address: Joi.string(),
    website: Joi.string().uri(),
    cv: Joi.string().uri(),
    linkedin: Joi.string().uri(),
    twitter: Joi.string().uri(),
    facebook: Joi.string().uri(),
    github: Joi.string().uri(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email().optional(),
      name: Joi.string().optional(),
      avatar: Joi.string().uri().optional(),
      department: Joi.string().valid('CSE', 'EEE', 'CE', 'ME', 'BBA', 'TE', 'IPE', '').allow('', null),
      semester: Joi.string().valid('1.1', '1.2', '2.1', '2.2', '3.1', '3.2', '4.1', '4.2', '').allow('', null),
      studentId: Joi.string().optional(),
      bio: Joi.string().max(500).allow('', null),
      profession: Joi.string().allow('', null),
      skills: Joi.alternatives().try(
        Joi.array().items(Joi.string()),
        Joi.string().custom((value, helpers) => {
          if (value.trim() === '') return [];
          return value.split(',').map(skill => skill.trim());
        })
      ).allow('', null),
      phone: Joi.string().pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).allow('', null),
      address: Joi.string().allow(''),
      website: Joi.string().uri().allow('', null),
      cv: Joi.string().uri().allow('', null),
      linkedin: Joi.string().uri().allow('', null),
      twitter: Joi.string().uri().allow('', null),
      facebook: Joi.string().uri().allow('', null),
      github: Joi.string().uri().allow('', null),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const changePassword = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required().custom(password),
  }),
};

const getUserByStudentId = {
  params: Joi.object().keys({
    studentId: Joi.string().required(),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  changePassword,
  getUserByStudentId,
};
