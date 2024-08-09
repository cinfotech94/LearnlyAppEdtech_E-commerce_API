import express from 'express';
import connectDB from './config/db';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import setupSwagger from './config/swagger';  // Import the Swagger setup

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger setup
setupSwagger(app);

// Define Routes
app.use('/api/auth', require('./routes/users').default);
app.use('/api/products', require('./routes/products').default);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
