var express = require('express');
var router = express.Router();

var ProductCtrl = require('../controller/product');

router.get('/product', ProductCtrl.getProduct);
router.get('/product/:product_id', ProductCtrl.getProductId);
router.post('/product', ProductCtrl.postProduct);
router.put('/product/:product_id', ProductCtrl.putProduct);
router.delete('/product/:product_id', ProductCtrl.deleteProduct);

module.exports = router;
