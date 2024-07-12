import express from 'express';
import Club from '../models/Club.model.js';
import JoinRequest from '../models/JoinRequest.model.js';

const router = express.Router();

router.post('/join', async (req, res) => {
  const { clubId } = req.body;
  const userId = req.user.id; // Assuming JWT auth middleware sets req.user

  const joinRequest = new JoinRequest({ userId, clubId });
  await joinRequest.save();

  res.status(200).send({ message: 'Join request sent!' });
});

router.get('/requests', async (req, res) => {
    const userId = req.user.id; // Assuming JWT auth middleware sets req.user
  
    const requests = await JoinRequest.find({ userId }).populate('clubId', 'name');
    res.status(200).send(requests.map(req => ({
      id: req._id,
      clubName: req.clubId.name,
      status: req.status
    })));
});

router.get('/:clubId', async (req, res) => {
    const { clubId } = req.params;
  
    const club = await Club.findById(clubId).populate('events');
    if (!club) return res.status(404).send('Club not found');
  
    res.status(200).send(club);
  });

export default router;
