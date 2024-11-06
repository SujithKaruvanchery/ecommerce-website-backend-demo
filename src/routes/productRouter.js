const express = require('express')
const router = express.Router()
const { productList, productDetails,createProduct } = require("../controllers/productController")

router.get('/', productList)
router.post('/',createProduct)
router.get('/details', productDetails)

module.exports = router