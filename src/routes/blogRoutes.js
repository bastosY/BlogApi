const express = require('express')
const blogEndpoints = require('./endpoints/blogEndpoints')

const router = express.Router()

router.use('/blog', blogEndpoints)


module.exports = router