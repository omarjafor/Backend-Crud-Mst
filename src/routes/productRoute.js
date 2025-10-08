const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// get all products get
router.get('/', async(req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({message: 'Error fetching products', err})
    }
})

// get product by id get
router.get('/:id', async(req, res) => {
    const { id } = req.params;
    try{
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({message: 'Error fetching products', err})
    }
})

// create new prouduct post
router.post('/', async (req, res) => {
    const product = req.body;
    try {
        const newProduct = new Product(product);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({message: 'Error create product', err});
    }
})
// update a product put/patch

// delete a product delete


module.exports = router;