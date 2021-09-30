const mongoose = require('mongoose')

const segmentSchema = new mongoose.Schema({
    customerID: {
        type:Number,
        required: true
    },
    segment: {
        type: String,
        required: true
    },
    recency: {
        type: Number,
        required: true
    },
    frequency: {
        type: Number,
        required: true
    },
    monetary: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('segment', segmentSchema)