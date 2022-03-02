require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/mongoose');
const Route = require('./routes')

connectDB()

const app = express();
const router = express.Router()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', Route(router));


mongoose.connection.once('open', () => {
    console.log('connected to MongoDB');
    app.listen(3500, () => console.log('server running on port 3500'));
})