import express from 'express';
import Club from '../models/Club.model.js';
import JoinRequest from '../models/JoinRequest.model.js';
import User from '../models/user.model.js';
import adminMiddleware from '../middlewares/verifyAdmin.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();

router.get('/test', (req, res, next) => {
  console.log('User:', req.user);
  res.status(200).json({
    message: 'Hello Admin!',
  });
});

router.get('/clubs', async (req, res) => {
  const adminId = req.user.id; // Assuming JWT auth middleware sets req.user

  const clubs = await Club.find({ adminId });
  res.status(200).send(clubs);
});

router.post('/clubs', async (req, res) => {
  try {
    const { name, description, adminId } = req.body;

    const newClub = new Club({
      name,
      description,
      adminId
    });

    await newClub.save();

    res.status(201).send(newClub);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/clubs/:clubId/requests', async (req, res) => {
  const { clubId } = req.params;
  const adminId = req.user.id;

  const club = await Club.findOne({ _id: clubId, adminId });
  if (!club) return res.status(403).send('Forbidden');

  const requests = await JoinRequest.find({ clubId }).populate('userId', 'name');
  res.status(200).send(requests.map(req => ({
    id: req._id,
    userName: req.userId.name,
    status: req.status
  })));
});

router.post('/requests/:requestId/approve', async (req, res) => {
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

export default router;
