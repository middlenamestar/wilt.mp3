const mongoose = require('mongoose');

const mp3Schema = new mongoose.Schema({
    url: String,
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
});

module.exports = mongoose.model('mp3', mp3Schema);