const express = require("express")
const userSchema = require("../models/user.js")

// Crear enrutador
const router = express.Router();

// Create user
router.post('/', (req, res) => {
    // res.send('Create user');
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Get All Users
router.get('/', (req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Get a user
router.get('/:id', (req, res) => {
    const { id } = req.params;
    userSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Update a user
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema.updateOne({ _id: id }, { $set: { name, age, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Deleta a user
router.delete('/:id', (req, res) => {
    const { id } = req.params
    userSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;