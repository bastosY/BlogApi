const express = require('express')
const blogEndpoints = require('./endpoints/userEndpoints')

const router = express.Router()

router.use('/user', router)

module.exports = router