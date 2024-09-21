const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createClub = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    logo: Joi.string().required(),
    website: Joi.string().required(),
    moderators: Joi.array().items(Joi.string().custom(objectId)),
    members: Joi.array().items(Joi.string().custom(objectId)),
    pendings: Joi.array().items(Joi.string().custom(objectId)),
  }),
};

const getClubs = {
  query: Joi.object().keys({
    name: Joi.string(),
    userId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getClub = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId),
  }),
};

const getPendingMembers = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    moderatorId: Joi.string().custom(objectId).required(),
  }),
};

const getClubMembers = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    moderatorId: Joi.string().custom(objectId).required(),
  }),
};

const getClubModerators = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    moderatorId: Joi.string().custom(objectId).required(),
  }),
};

const updateClub = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string(),
      logo: Joi.string(),
      website: Joi.string(),
      moderators: Joi.array().items(Joi.string().custom(objectId)),
      members: Joi.array().items(Joi.string().custom(objectId)),
      pendings: Joi.array().items(Joi.string().custom(objectId)),
    })
    .min(1),
};

const deleteClub = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId),
  }),
};
const addAdminToClub = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    moderatorId: Joi.string().custom(objectId),
  }),
};

const removeAdminFromClub = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    moderatorIds: Joi.array().items(Joi.string().custom(objectId)).required(),
  }),
};
const memberStatus = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
};
const approveClubMember = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    memberIds: Joi.array().items(Joi.string().custom(objectId)).required(),
  }),
};
const deleteClubMember = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    memberIds: Joi.array().items(Joi.string().custom(objectId)).required(),
  }),
};

module.exports = {
  createClub,
  getClubs,
  getClub,
  updateClub,
  deleteClub,
  addAdminToClub,
  removeAdminFromClub,
  approveClubMember,
  getPendingMembers,
  getClubMembers,
  getClubModerators,
  memberStatus,
  deleteClubMember,
};
