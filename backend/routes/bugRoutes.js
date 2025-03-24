const express = require('express');
const Bug = require('../models/Bug');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const bugs = await Bug.find();
        res.json(bugs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newBug = new Bug(req.body);
        await newBug.save();
        res.status(201).json(newBug);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBug);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Bug.findByIdAndDelete(req.params.id);
        res.json({ message: 'Bug deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
