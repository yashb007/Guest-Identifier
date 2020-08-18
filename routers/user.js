const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controller = require('../controllers/user')
router.post('/register',controller.register)
router.get('/getUser',controller.getAllUser)

module.exports = router