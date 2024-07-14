// server/src/routes/admin.route.js
import express from 'express';
import Club from '../models/Club.model.js';
import JoinRequest from '../models/JoinRequest.model.js';
import User from '../models/user.model.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', (req, res, next) => {
  console.log('User:', req.user);
  res.status(200).json({
    message: 'Hello Admin!',
  });
});

router.get('/clubs', verifyToken, async (req, res) => {
  const adminId = req.user.id;

  try {
    const clubs = await Club.find({ adminId });
    if (clubs.length === 0) {
      return res.status(404).send('No clubs found');
    }
    res.status(200).send(clubs);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/clubs', verifyToken, async (req, res) => {
  try {
    const { name, description, adminId, clubLogo, clubImages } = req.body;

    const newClub = new Club({
      name,
      description,
      adminId,
      clubLogo,
      clubImages,
    });

    await newClub.save();

    res.status(201).send(newClub);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/clubs/:clubId/requests', verifyToken, async (req, res) => {
  const { clubId } = req.params;
  const adminId = req.user.id;

  const club = await Club.findOne({ _id: clubId, adminId });
  if (!club) return res.status(403).send('Forbidden');

  const requests = await JoinRequest.find({ clubId }).populate('userId', 'name');
  res.status(200).send(
    requests.map((req) => ({
      id: req._id,
      userName: req.userId.name,
      status: req.status,
    }))
  );
});

router.post('/requests/:requestId/approve', verifyToken, async (req, res) => {
  const { requestId } = req.params;
  const joinRequest = await JoinRequest.findById(requestId);

  if (!joinRequest) return res.status(404).send('Request not found');

  const club = await Club.findById(joinRequest.clubId);
  if (!club || club.adminId.toString() !== req.user.id) return res.status(403).send('Forbidden');

  joinRequest.status = 'approved';
  await joinRequest.save();

  const user = await User.findById(joinRequest.userId);
  user.clubs.push(joinRequest.clubId);
  await user.save();

  res.status(200).send({ message: 'Request approved' });
});

//Get club by id
router.get('/clubs/:clubId', verifyToken, async (req, res) => {
  const { clubId } = req.params;
  //console.log(req.params);
  const adminId = req.user.id;
  //console.log(req.user.id);

  const club = await Club.findOne({ _id: clubId, adminId });
  if (!club) return res.status(404).send('Club not found or you do not have permission to view it.');

  res.status(200).send(club);
});

// Add the route for updating a club
router.put('/clubs/:clubId', verifyToken, async (req, res) => {
  const { clubId } = req.params;
  const { name, description, clubLogo, clubImages } = req.body;
  const adminId = req.user.id;

  try {
    const club = await Club.findOneAndUpdate(
      { _id: clubId, adminId },
      { name, description, clubLogo, clubImages },
      { new: true }
    );

    if (!club) {
      return res.status(404).send('Club not found or you do not have permission to update it.');
    }

    res.status(200).send(club);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
