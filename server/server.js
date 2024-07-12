import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import log from "./middlewares/logger.js";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import clubRouter from './routes/club.route.js';
import adminRouter from './routes/admin.route.js';
dotenv.config();

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookieParser());
const clientURLs = process.env.CLIENT_URL.split(',');
const corsOptions = {
  origin: (origin, callback) => {
    if (clientURLs.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// Start server
app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:" + process.env.PORT);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection failed with error: " + err);
  });

// Routes
app.get('/test', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/club', clubRouter);
app.use('/api/admin', adminRouter);

// API logger
app.use(log);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all handler for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


export default app;
