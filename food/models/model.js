const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    foodName: {
        required: true,
        type: String
    },
    foodPrice: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)