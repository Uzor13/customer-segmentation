const Segment = require('../models/segment.model')


const postSegment = async (req, res) => {
    const {segment, recency, frequency, monetary, customerID} = req.body

    const newSegment = await new Segment({
        customerID,
        segment,
        recency,
        frequency,
        monetary
    })

    try {
        const savedSegment = await newSegment.save()
        res.status(200).json(savedSegment)
    } catch (err) {
        res.status(404).json({message: err})
    }

}

const getSegment = async (req, res) => {
    try {
        const segments = await Segment.find()
        res.status(200).json({
            message: 'Success',
            data: segments
        })
    } catch (err) {
        res.status(404).json({message: err})
    }
}

const getSpecificSegment = async (req, res) => {
    try {
        const segments = await Segment.find({segment: req.params.segment})
        res.status(200).json(segments)
    } catch (err) {
        res.status(404).json({message: err})
    }
}

module.exports = {
    postSegment,
    getSegment,
    getSpecificSegment
}