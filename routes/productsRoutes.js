const express = require('express');
const productsControl = require('../controllers/productsController');

const router = express.Router();

router.get('/api/products/', async (req,res) => {
// If we receive a query param, i use the getby name controller , else, show all products 
    if(req.query.name){
        const data = await productsControl.getProductByName(req.query.name);
        res.status(200).json(data)
    }else if(req.query.id){
        const data = await productsControl.getProductByManufacturer(req.query.id);
        res.status(200).json(data)
    }else{
        const data = await productsControl.getAllProducts()
        res.status(200).json(data)
    }
  });

module.exports = router;