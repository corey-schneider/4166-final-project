const mongoose = require("mongoose")

const chartSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    },
    budget: {
        type: Number,
        required: true,
        unique: false,
    },
    backgroundColor: {
        type: String,
        required: true,
        unique: false,
    }
}, {collection: 'budgets'})

module.exports = mongoose.model('budgets', chartSchema)