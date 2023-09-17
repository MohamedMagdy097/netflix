const mongo = require('mongoose');

var productSchema = mongo.Schema({
    id: Number,
    title: String,
    price: Number,
    image: String,
    isAvailable: Boolean
});

module.exports = mongo.model('Product', productSchema);