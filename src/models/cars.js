const mongoose = require('mongoose');

const carsSchema = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    km: {
        type: Number,
        require: true
    },
    date_registered: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Inventory', carsSchema);