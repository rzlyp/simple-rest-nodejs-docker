var product = require('../model/product');

function Product(){
  this.getProduct = (req, res, next)=>{
    product.find({}, (err, products)=>{
        if(err)
          console.log(err)

        res.json({
            status_code : 200,
            message : "Success get product",
            results : products
        })
    })
  }
  this.getProductId = (req, res, next)=>{
    product.find({productId : req.param.product_id}, (err, products)=>{
        if(err)
          console.log(err)

        res.json({
            status_code : 200,
            message : "Success get product",
            results : products
        })
    })
  }
  this.postProduct = (req, res, next)=>{
    var data = {
      product_id : req.body.product_id,
      product_name : req.body.product_name,
      quantity : req.body.quantity
    }
    let Products = new product(data)
    Products.save((err, products)=>{
        if(err)
          console.log(err)

        res.json({
            status_code : 200,
            message : "Success save product",
            results : products
        })
    })
  }
  this.putProduct = (req, res, next)=>{
    var data = {
      product_name : req.body.product_name,
      quantity : req.body.quantity
    }
    Products.findAndUpdate({product_id : req.params.product_id}, {$set:data},(err, products)=>{
        if(err)
          console.log(err)

        res.json({
            status_code : 200,
            message : "Success update product",
            results : products
        })
    })
  }
  this.deleteProduct = (req, res, next)=>{

    Products.findAndRemove({product_id : req.params.product_id},(err)=>{
        if(err)
          console.log(err)

        res.json({
            status_code : 200,
            message : "Success delete product",
        })
    })
  }
}

module.exports = new Product();
