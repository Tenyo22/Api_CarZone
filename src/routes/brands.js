const express = require('express');
const brandsSchema = require('../models/brands.js');

const router = express.Router();

// Create a brand
router.post('/', (req, res) => {
    const brand = brandsSchema(req.body);
    brand.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Get all brands
router.get('/', (req, res) => {
    brandsSchema.find({ status: true })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Get a brands
router.get('/:id', (req, res) => {
    const { id } = req.params;
    brandsSchema.findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Update a brands
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { brand, status } = req.body;
    brandsSchema.updateOne({ _id: id }, { $set: { brand, status } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Delete a brands
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    brandsSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

module.exports = router;