const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controller = require('../controllers/admin')
const {getAllUser} = require('../controllers/user')
router.post('/signin',controller.signin)
router.post('/signup',controller.signup)
router.post('/signout',controller.signout)
router.post('/users',getAllUser)


module.exports = router