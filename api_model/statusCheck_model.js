const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    statusCheck: {
        type: String,
        default: "AreYouActive?"
    },
    time: {
        type: String
    }
})

module.exports = mongoose.model("statusPost", Schema)