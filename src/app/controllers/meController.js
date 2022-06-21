const Movie = require('../models/Movie');
const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');

class meController {
    //[get] (/) the fucking home page

    storeMovie(req, res, next) {

        Movie.find({})
            .then((Movie) => {
                // res.json(Movie)
                res.render('me/storage', {
                    Movie: multipleMongooseToObject(Movie),
                });
            })
            .catch(next);
    }

    storeProduct(req, res, next) {
        Product.find({})
            .then((Product) => {
                // res.json(Product)
                res.render('me/productStorage', {
                    Product: multipleMongooseToObject(Product),
                });
            })
            .catch(next);
    }


}

module.exports = new meController();
