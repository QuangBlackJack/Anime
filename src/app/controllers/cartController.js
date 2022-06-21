const Cart = require('../models/Cart');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongoosesToObject } = require('../../util/mongoose');

class sellingController {
    //[get] (/) the fucking home page

    detail(req, res, next) {
        Cart.find({})
            .then((Cart) => {
                // res.json(Cart)
                res.render('cart/cart', {
                    Cart: multipleMongooseToObject(Cart),
                });
            })
            .catch(next);
    }

    add(req, res, next) {
        const cart = new Cart(req.query);
        cart.save()
            .then(() => res.redirect('/cart'))
            .catch(error => {
            });
    }

    delete(req, res, next) {
        Cart.deleteOne({ _id: req.params._id })
            .then(
                (Cart) =>
                    res.redirect('/cart'),
            )
            .catch(next);
    }

    deleteAll(req, res, next) {
        Cart.deleteMany({})
            .then(
                (Cart) =>
                    res.redirect('/cart'),
            )
            .catch(next);
    }


}

module.exports = new sellingController();
