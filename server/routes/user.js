const router = require('express').Router()
const {postSegment, getSegment, getSpecificSegment} = require('../controllers/segment.controller')


router.post('/add-segment',  postSegment)
router.get('',  getSegment)
router.get('/segments/:segment', getSpecificSegment)

module.exports = router