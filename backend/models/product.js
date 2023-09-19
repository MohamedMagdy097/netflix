const mongo = require('mongoose');

var productSchema = mongo.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: String,
        count: Number
    }
});

module.exports = mongo.model('Product', productSchema);