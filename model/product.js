var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Product  = new Schema({
    product_id: String,
    product_nae : String,
    quantity: Number
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Product', Product);
