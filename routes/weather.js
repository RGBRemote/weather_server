const express = require('express')
const router = express.Router()
const data = require('../api_model/weather_model')

router.post('/', async (req,res) => {
    const post = new data({
        temp: req.body.temp,
        humidity: req.body.humidity
    })

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/', async (req,res) => {
    try {
        const posts = await data.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

router.patch('/', async (req, res) => {
    try {
         // Set your default ID here
        const condition = {id: "AnubhavRathore" }; // Change this to any condition you prefer

        const updateFields = {
            temp: req.body.temp,
            humidity: req.body.humidity,
            statusSensor: req.body.statusSensor
        };

        const updatedPost = await data.findOneAndUpdate(
            condition,
            { $set: updateFields },
            { new: true }
        );
        
        if (updatedPost) {
            res.json(updatedPost);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router