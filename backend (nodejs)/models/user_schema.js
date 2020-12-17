const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: Number,
        required: true,
        unique: false,
    }
}, {collection: 'users'})

module.exports = mongoose.model('users', userSchema)