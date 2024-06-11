const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    dessertName: {
        required: true,
        type: String
    },
    dessertPrice: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)