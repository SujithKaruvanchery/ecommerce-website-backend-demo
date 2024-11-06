const ProductModel = require('../models/productModel')
const productModel = require('../models/productModel')

const productList = (req, res) => {
    productModel.find().exec()
        .then((products) => {
            if (products) {
                res.json(products, status = 200)
            } else {
                res.json({message:"BAD REQUEST"}, status = 400)
            }
        })
}

const productDetails = (req, res) => {
    res.send("PRODUCT DETAILS")
}

const createProduct = (req, res) => {
    const newproduct = new ProductModel(req.body)
    newproduct.save()
        .then((product) => {
            console.log(product)
            res.send("PRODUCT CREATED SUCCESSFULLY")
        })
}

module.exports = { productList, productDetails, createProduct }