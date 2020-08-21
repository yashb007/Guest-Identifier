const express = require('express')
const router = express.Router()
const controller = require('../controllers/event')
router.param('eventId', controller.getEventById)
router.post('/add',controller.add)
router.post('/edit/:eventId',controller.edit)
router.post('/delete/:eventId',controller.delete)
router.get('/getEvent',controller.getAllEvent)

module.exports = router