const express = require("express")
const router = express.Router()
const statusPost = require("../api_model/statusCheck_model")
const date = new Date()

router.post('/', async (req,res) => {
    const post = new statusPost({
        statusCheck: req.body.statusCheck,
        time: `${date.getTime()}`
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
        var str1 = "areyouactive?"; var str2 = "ok";
        const condition = {
            $or: [
                {statusCheck: "areyouactive?"},
                {statusCheck: "ok"}
            ]
        } // Change this to any condition you prefer

        const updateFields = {
            statusCheck: req.body.statusCheck,
            time: `${date.getTime()}`
        };

        const updatedPost = await statusPost.findOneAndUpdate(
            (condition),
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
