const express = require('express');
const carsSchema = require('../models/cars.js');

const router = express.Router();

// Create a car register
router.post('/', (req, res) => {
    const car = carsSchema(req.body);
    car.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
});

// Get all cars
router.get('/', (req, res) => {
    carsSchema.find({ status: true })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Get a car
router.get('/:id', (req, res) => {
    const { id } = req.params;
    carsSchema.findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Update a car
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { brand, model, price, year, km } = req.body;
    carsSchema.updateOne({ _id: id }, { $set: { brand, model, price, year, km } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Delete a car
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    carsSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

module.exports = router;