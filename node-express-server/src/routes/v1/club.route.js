const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const clubValidation = require('../../validations/club.validation');
const clubController = require('../../controllers/club.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('addClub'), validate(clubValidation.createClub), clubController.createClub)
  .get(auth('getClubs'), validate(clubValidation.getClubs), clubController.getClubs);

router
  .route('/:clubId')
  .get(auth('getClubs'), validate(clubValidation.getClub), clubController.getClub)
  .patch(auth('manageClubs'), validate(clubValidation.updateClub), clubController.updateClub)
  .delete(auth('addClub'), validate(clubValidation.deleteClub), clubController.deleteClub)

router
  .route('/:clubId/status')
  .post(auth('getClubs'), validate(clubValidation.memberStatus), clubController.memberStatus);

router
  .route('/:clubId/moderators')
  .patch(auth('manageClubs'), validate(clubValidation.addAdminToClub), clubController.addAdminToClub)
  .delete(auth('manageClubs'), validate(clubValidation.removeAdminFromClub), clubController.removeAdminFromClub)
  .post(auth('manageClubs'), validate(clubValidation.getClubModerators), clubController.getClubModerators);
router
  .route('/:clubId/members')
  .patch(auth('manageClubs'), validate(clubValidation.approveClubMember), clubController.approveClubMember)
  .post(auth('manageClubs'), validate(clubValidation.getClubMembers), clubController.getClubMembers);

router
  .route('/:clubId/pendings')
  .post(auth('manageClubs'),validate(clubValidation.getPendingMembers), clubController.getPendingMembers)
  .delete(auth('manageClubs'),validate(clubValidation.deleteClubMember), clubController.removeUserFromPendingList);

router
  .route('/:clubId/approve')
  .post(auth('manageClubs'),validate(clubValidation.approveClubMember), clubController.approveClubMember);
router
  .route('/:clubId/delete')
  .post(auth('manageClubs'),validate(clubValidation.deleteClubMember), clubController.deleteClubMember);


module.exports = router;
