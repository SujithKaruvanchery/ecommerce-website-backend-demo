const express = require('express')
const mongoose = require('mongoose');
const app = express()
var cors = require('cors')
const port = 3000
const productRouter = require('./src/routes/productRouter')
const ProductModel = require('./src/models/productModel')

var allowlist = ['http://localhost:5173', 'http://127.0.0.1.5173']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true }
    } else {
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}

async function main() {
    await mongoose.connect('mongodb+srv://sujithkaruvanchery:wkNQb2NftHBhtZnl@ecommerce.8m50t.mongodb.net/?retryWrites=true&w=majority&appName=eCommerce');
}

main()
    .then(res => {
        console.log("DATABASE CONNECTED")
    })
    .catch(err => console.log(err));

app.use(cors(corsOptionsDelegate))
app.use(express.json())
app.use('/', productRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})