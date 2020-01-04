const express = require('express')
const router = express.Router()

const { getCategories } = require('../controllers/device')

router.get('/categories', getCategories)

module.exports = router