const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
    date: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        unique: false,
    },
    budget: {
        type: Number,
        required: true,
        unique: false,
    },
    actualSpent: {
        type: Number,
        required: true,
        unique: false,
    }
}, {collection: 'budgets'})

module.exports = mongoose.model('budgets', budgetSchema)