const httpStatus = require('http-status');
const { Club } = require('../models');
const ApiError = require('../utils/ApiError');
const { getUserById } = require('./user.service');
const { User } = require('../models');

/**
 * Create a club
 * @param {Object} clubBody
 * @returns {Promise<Club>}
 */
const createClub = async (clubBody) => {
  // Uncomment and implement this check if you want to ensure unique club names
  // if (await Club.isClubExists(clubBody.name)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Club already taken');
  // }
  return Club.create(clubBody);
};

/**
 * Query for clubs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryClubs = async (filter, options) => {
  const clubs = await Club.paginate(filter, options);
  return clubs;
};

/**
 * Get club by id
 * @param {ObjectId} id
 * @returns {Promise<Club>}
 */
const getClubById = async (id) => {
  return Club.findById(id)
    .populate('moderators', 'name email')
    .populate('members', 'name email')
    .populate('pendings', 'name email');
};

/**
 * Get pending members of a club
 * @param {ObjectId} clubId
 * @param {ObjectId} moderatorId
 * @returns {Promise<Array>}
 */
const getPendingMembers = async (clubId, moderatorId) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  if (!club.moderators.some((mod) => mod._id.toString() === moderatorId.toString())) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Not authorized');
  }
  return club.pendings;
};

/**
 * Get members of a club
 * @param {ObjectId} clubId
 * @param {ObjectId} moderatorId
 * @returns {Promise<Array>}
 */
const getClubMembers = async (clubId, moderatorId) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  if (!club.moderators.some((mod) => mod._id.toString() === moderatorId.toString())) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Not authorized');
  }
  return club.members;
};

/**
 * Get moderators of a club
 * @param {ObjectId} clubId
 * @param {ObjectId} moderatorId
 * @returns {Promise<Array>}
 */
const getClubModerators = async (clubId, moderatorId) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  if (!club.moderators.some((mod) => mod._id.toString() === moderatorId.toString())) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Not authorized');
  }
  return club.moderators;
};

/**
 * Update club by id
 * @param {ObjectId} clubId
 * @param {Object} updateBody
 * @returns {Promise<Club>}
 */
const updateClubById = async (clubId, updateBody) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }

  Object.assign(club, updateBody);
  await club.save();
  return club;
};

/**
 * Delete club by id
 * @param {ObjectId} clubId
 * @returns {Promise<Club>}
 */
const deleteClubById = async (clubId) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  await club.deleteOne();
  return club;
};

/**
 * Add admin to club
 * @param {ObjectId} clubId
 * @param {ObjectId} moderatorId
 * @returns {Promise<Club>}
 */
const addAdminToClub = async (clubId, moderatorId) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  const isModerator = club.moderators.some((mod) => mod._id.toString() === moderatorId.toString());
  if (!isModerator) {
    club.moderators.push(moderatorId);
    await club.save();
  }
  else if (isModerator) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User is already a moderator');
  }
  return club;
};

/**
 * Remove moderators from club
 * @param {ObjectId} clubId
 * @param {ObjectId} moderatorIds
 * @returns {Promise<Club>}
 */
const removeAdminFromClub = async (clubId, moderatorIds) => {
  // Ensure moderatorIds is an array
  if (!Array.isArray(moderatorIds)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'moderatorIds must be an array');
  }

  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }

  for (const moderatorId of moderatorIds) {
    // Remove moderator from moderators list if present
    club.moderators = club.moderators.filter(moderator => moderator._id.toString() !== moderatorId.toString());
  }

  await club.save();

  return club;
};

/**
 * Add user to club pending list
 * @param {ObjectId} clubId
 * @param {ObjectId} userId
 */
const addUserToPendingList = async (clubId, userId) => {
  const club = await getClubById(clubId);
  const isPending = club.pendings.some(pending => pending._id.toString() === userId.toString());
  const isMember = club.members.some(member => member._id.toString() === userId.toString());
  if(!isPending && !isMember) {
    club.pendings.push(userId);
    await club.save();
  }
  return club;
};

/**
 * Remove users from pending list
 * @param {ObjectId} clubId
 * @param {ObjectId} userId
 */
const removeUserFromPendingList = async (clubId, userIds) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  if (!Array.isArray(userIds)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'userIds must be an array');
  }
  for (const userId of userIds) {
    club.pendings = club.pendings.filter(pending => pending._id.toString() !== userId.toString());
  }
  await club.save();
  return club;
};

/**
 * Check if user is member of club
 * @param {ObjectId} clubId
 * @param {ObjectId} userId
 * @returns {Promise<Boolean>}
 */

 /**
  * Get member status of user in club
  * @param {ObjectId} clubId
  * @param {ObjectId} userId
  * @returns {Promise<Club>}
  *
  */
 const memberStatus = async (clubId, userId) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const isMember = club.members.some(member => member._id.toString() === userId.toString());
  if (isMember) {
    return 'enrolled';
  }
  const isPending = club.pendings.some(pending => pending._id.toString() === userId.toString());
  if (isPending) {
    return 'pending';
  }

  throw new ApiError(httpStatus.NOT_FOUND);
};

/**
 * Approve club member
 * @param {ObjectId} clubId
 * @param {Array<ObjectId>} memberIds
 * @returns {Promise<Club>}
 */
const approveClubMember = async (clubId, memberIds) => {
  console.log('memberIds', memberIds);
  if (!Array.isArray(memberIds)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'memberIds must be an array');
  }
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  const errors = [];

  for (const memberId of memberIds) {
    const isMember = club.members.some(member => member.id.toString() === memberId.toString());
    const isPending = club.pendings.some(pending => pending.id.toString() === memberId.toString());

    if (!isMember && isPending) {
      const pendingMember = club.pendings.find(pending => pending.id.toString() === memberId.toString());
      club.members.push(pendingMember);
      club.pendings = club.pendings.filter(pending => pending.id.toString() !== memberId.toString());

      // Add club to user's clubs array
      try {
        await User.findByIdAndUpdate(
          memberId,
          { $addToSet: { clubs: clubId } },
          { new: true }
        );
      } catch (error) {
        errors.push(`Failed to update user ${memberId}: ${error.message}`);
      }
    } else {
      errors.push(`Member ID ${memberId} is already approved or not in pending list`);
    }
  }

  await club.save();

  if (errors.length > 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, errors.join(', '));
  }

  return club;
};

/**
 * Delete club members
 * @param {ObjectId} clubId
 * @param {ObjectId[]} memberIds
 * @returns {Promise<Club>}
 */
const deleteClubMember = async (clubId, memberIds) => {
  // Ensure memberIds is an array
  if (!Array.isArray(memberIds)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'memberIds must be an array');
  }

  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }

  for (const memberId of memberIds) {
    // Remove member from members list if present
    club.members = club.members.filter(member => member._id.toString() !== memberId.toString());

    // Remove member from pendings list if present
    club.pendings = club.pendings.filter(pending => pending._id.toString() !== memberId.toString());
  }

  await club.save();

  return club;
};

module.exports = {
  createClub,
  queryClubs,
  getClubById,
  getPendingMembers,
  getClubMembers,
  getClubModerators,
  updateClubById,
  deleteClubById,
  addAdminToClub,
  removeAdminFromClub,
  memberStatus,
  approveClubMember,
  addUserToPendingList,
  deleteClubMember,
  removeUserFromPendingList,
};
