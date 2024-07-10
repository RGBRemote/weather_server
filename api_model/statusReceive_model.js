const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    statusReceive: {
        type: String,
    },
    time: {
        type: String
    }
})

module.exports = mongoose.model("statusGet", Schema)