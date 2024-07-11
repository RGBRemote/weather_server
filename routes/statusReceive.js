const express = require("express")
const router = express.Router()
const statusPost = require("../api_model/statusReceive_model")
const date = new Date()

router.post('/', async (req,res) => {
    const post = new statusPost({
        statusReceive: req.body.statusReceive,
        time: `${new Date().getTime()}`
    })
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

router.patch('/', async (req, res) => {
    try {
         // Set your default ID here
        const condition = {statusReceive: "yes" }; // Change this to any condition you prefer

        const updateFields = {
            statusReceive: req.body.statusReceive,
            time: `${new Date().getTime()}`
        };

        const updatedPost = await statusPost.findOneAndUpdate(
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
        res.json({ message: "Error" });
    }
});

router.get('/', async (req,res) => {
    try {
        const posts = await statusPost.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router
