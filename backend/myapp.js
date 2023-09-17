const express = require('express');
const app = express();
const mongo = require('mongoose');
const Product = require('./models/product');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(4000, () => {
    console.log('server connected');
});

mongo.connect('mongodb+srv://dstr1:1357902468@mmagdydb.otulj0s.mongodb.net/ecommerce')
    .then(() => {
        console.log('connected to DB!');
    })
    .catch((err) => {
        console.log('error connecting to DB!');
});

app.get('/products', (req, res) => {
    Product.find()
        .then((foundProducts) => {
            res.send(foundProducts);
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