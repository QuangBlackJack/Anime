const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongoosesToObject } = require('../../util/mongoose');

class sellingController {
    //[get] (/) the fucking home page

    index(req, res, next) {
        Product.find({})
            .then((Product) => {
                // res.json(Product)
                res.render('selling/sell', {
                    Product: multipleMongooseToObject(Product),
                });
            })
            .catch(next);
    }

    add(req, res, next) {
        res.render('selling/addproduct')
    }

    added(req, res, next) {
        const product = new Product(req.query);
        product.save()
            .then(() => res.redirect('/'))
            .catch(error => {
            });
    }

    edit(req, res, next) {
        Product.findOne({ _id: req.params._id })
            .then(
                (Product) =>
                    res.render('selling/update', { Product: mongoosesToObject(Product) }),
            )
            .catch(next);
    }

    update(req, res, next) {
        Product.updateOne({ _id: req.params._id }, req.query)
            .then(
                (Product) =>
                    res.redirect('/sell'),
            )
            .catch(next);
    }

    delete(req, res, next) {
        Product.deleteOne({ _id: req.params._id })
            .then(
                (Product) =>
                    res.redirect('/'),
            )
            .catch(next);
    }

    detail(req, res, next) {
        Product.findOne({ _id: req.params._id })
            .then(
                (Product) =>
                    res.render('selling/detail', { Product: mongoosesToObject(Product) }),
            )
            .catch(next);
    }
}

module.exports = new sellingController();
