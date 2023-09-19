const express = require('express');
const app = express();
const mongo = require('mongoose');
const Product = require('./models/product');
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

mongo.connect('mongodb+srv://dstr1:1357902468@mmagdydb.otulj0s.mongodb.net/ecommerce')
    .then(() => {
        console.log('connected to DB!');
    })
    .catch((err) => {
        console.log('error connecting to DB!');
});

function getHello(req, res, next) {
    console.log("hello from get");
    next();
}
function sayHello(req, res, next) {
    console.log("hello from say");
    next();
}

// localhost:4000/products?pageNumber=2&pageSize=5
app.get('/products', (req, res) => {
    const pageNumber = +req.query.pageNumber;
    const pageSize = +req.query.pageSize;
    const myQuery = Product.find();
    var fetchedProducts;

    if (pageNumber && pageSize) {
        myQuery.skip(pageSize* (pageNumber - 1)).limit(pageSize);
    }

    myQuery
        .then((foundProducts) => {
            //res.send(foundProducts);
            fetchedProducts = foundProducts;
            return Product.count();
        })
        .then((productsCount) => {
            res.send({
                totalProducts: productsCount,
                products: fetchedProducts
            });
        })
        .catch((err) => {
            res.send(err);
    });
});

app.get('/products/:id', (req, res) => {
    // get id with _id: String
    // let id = req.params.id;
    // Product.findById(id)
    //     .then((foundProduct) => {
    //         res.send(foundProduct);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    // });

    let id = +req.params.id;
    // get id with _id: Number
    Product.findOne({id: id})
        .then((foundProduct) => {
            res.send(foundProduct);
        })
        .catch((err) => {
            console.log(err);
    });
});

app.post('/addProduct', (req, res) => {
    let productData = req.body;
    let newProduct = new Product({
        id: +productData.id,
        title: productData.title,
        price: +productData.price,
        image: productData.image,
        isAvailable: productData.isAvailable
    });
    newProduct.save()
        .then((msg) => {
            res.send({
                msg: "Product added successfully"
            });
        })
        .catch((err) => {
            console.log(err);
    });
});

app.put('/products/:id', (req, res) => {
    let id = +req.params.id;
    Product.updateOne({id: id}, {
        title: 'apple tv',

    })
    .then((msg) => {
        res.send({
            msg: "Product updated successfully"
        });
    })
    .catch((err) => {
        console.log(err);
    });
});

app.delete('/products/:id', (req, res) => {
    let id = +req.params.id;
    Product.deleteOne({id: id})
    .then((msg) => {
        res.send({
            msg: "Product deleted successfully"
        });
    })
    .catch((err) => {
        console.log(err);
    });
});
// app.use(getHello);
// app.use(sayHello);

app.listen(4000, () => {
    console.log('server connected');
});