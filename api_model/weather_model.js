const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    temp: {
        type: Number,
    },
    humidity: {
        type: Number,
    },
    id:{
        type: String,
        default: "AnubhavRathore"
    }
})

module.exports = mongoose.model('weatherModel', Schema)