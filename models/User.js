const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: String,
        required: true
    }
})

const user = model('User', userSchema)

module.exports = user