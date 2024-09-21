const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { clubService } = require('../services');

const createClub = catchAsync(async (req, res) => {
  const club = await clubService.createClub(req.body);
  res.status(httpStatus.CREATED).send(club);
});

const getClubs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);

  if (req.query.userId) {
    filter.$or = [
      { moderators: req.query.userId },
      { members: req.query.userId },
    ];
  }

  const result = await clubService.queryClubs(filter, options);
  res.send(result);
});

const getClub = catchAsync(async (req, res) => {
  const club = await clubService.getClubById(req.params.clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  res.send(club);
});

const getPendingMembers = catchAsync(async (req, res) => {
  const { clubId } = req.params;
  const { moderatorId } = req.body;
  const pendings = await clubService.getPendingMembers(clubId, moderatorId);
  res.send(pendings);
});

const getClubMembers = catchAsync(async (req, res) => {
  const members = await clubService.getClubMembers(req.params.clubId, req.body.moderatorId);
  res.send(members);
});

const getClubModerators = catchAsync(async (req, res) => {
  const moderators = await clubService.getClubModerators(req.params.clubId, req.body.moderatorId);
  res.send(moderators);
});

const updateClub = catchAsync(async (req, res) => {
  const club = await clubService.updateClubById(req.params.clubId, req.body);
  res.send(club);
});

const deleteClub = catchAsync(async (req, res) => {
  await clubService.deleteClubById(req.params.clubId);
  res.status(httpStatus.NO_CONTENT).send();
});

const getClubByModeratorId = catchAsync(async (req, res) => {
  const club = await clubService.getClubByModeratorId(req.params.moderatorId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  res.send(club);
});
const addAdminToClub = catchAsync(async (req, res) => {
  console.log(req.body);
  const club = await clubService.addAdminToClub(req.params.clubId, req.body.moderatorId);
  res.send(club);
});
const removeAdminFromClub = catchAsync(async (req, res) => {
  console.log('removeAdminFromClub', req.body);
  const club = await clubService.removeAdminFromClub(req.params.clubId, req.body.moderatorIds);
  res.send(club);
});

const memberStatus = catchAsync(async (req, res) => {
  const status = await clubService.memberStatus(req.params.clubId, req.body.userId);
  if(!status) {
    return res.status(httpStatus.NOT_FOUND).send({error: 'User not found in club'});
  }
  if(status === 'enrolled') {
    return res.status(httpStatus.OK).send({status: 'enrolled'});
  }
  if(status === 'pending') {
    return res.status(httpStatus.OK).send({status: 'pending'});
  }
});
const approveClubMember = catchAsync(async (req, res) => {
  const club = await clubService.approveClubMember(req.params.clubId, req.body.memberIds);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  res.send(club);
});

const deleteClubMember = catchAsync(async (req, res) => {
  const club = await clubService.deleteClubMember(req.params.clubId, req.body.memberIds);
  res.send(club);
});

const removeUserFromPendingList = catchAsync(async (req, res) => {
  const club = await clubService.removeUserFromPendingList(req.params.clubId, req.body.memberIds);
  res.send(club);
});

module.exports = {
  createClub,
  getClubs,
  getClub,
  updateClub,
  deleteClub,
  addAdminToClub,
  removeAdminFromClub,
  memberStatus,
  approveClubMember,
  getPendingMembers,
  getClubMembers,
  getClubModerators,
  getClubByModeratorId,
  deleteClubMember,
  removeUserFromPendingList,
};
