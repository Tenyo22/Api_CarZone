const mongoose = require('mongoose');

const brandsSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Brands', brandsSchema);