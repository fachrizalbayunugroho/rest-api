const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    beverageName: {
        required: true,
        type: String
    },
    beveragePrice: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)