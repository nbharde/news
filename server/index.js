const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const newsRoutes = require('./routes/news');

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const BASE_URL = '/api/v1';

app.use(BASE_URL + '/news', newsRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})