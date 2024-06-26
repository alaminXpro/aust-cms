import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import log from "./middlewares/logger.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on http://localhost:" + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Connection failed with error: " + err);
  });

// Serve static files
//app.use(express.static(path.join(__dirname, '/client/dist')));

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

// API logger
app.use(log);

// Default route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'def', 'index.html'));
// });

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
