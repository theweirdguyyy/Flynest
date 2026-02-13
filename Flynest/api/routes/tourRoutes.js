const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// Get all tours
router.get('/all', async (req, res) => {
    try {
        const tours = await Tour.find({});
        res.json(tours);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single tour by MongoDB _id
router.get('/:id', async (req, res) => {
    try {
        // findById automatically looks for the _id field
        const tour = await Tour.findOne({ id: req.params.id }); 
        
        if (tour) {
            res.json(tour);
        } else {
            res.status(404).json({ message: "Tour not found in database" });
        }
    } catch (err) {
        // This catch block handles cases where the ID string is not a valid MongoDB format
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;