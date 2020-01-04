const express = require('express')
const router = express.Router()

const { 
  getCategories, 
  getDeviceById,
  getDevicesbySubcategory,
  createDeviceBySubcategory
} = require('../controllers/device')

router.get('/categories', getCategories)
router.get('/subcategories/:subcategoryId/devices', getDevicesbySubcategory)
router.get('/create/:subcategoryId/devices', createDeviceBySubcategory)
router.get('/device/:deviceId', getDeviceById)
module.exports = router