const Movie = require('../models/Movie');
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
}

module.exports = new meController();
