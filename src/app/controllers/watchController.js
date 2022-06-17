const Movie = require('../models/Movie');
const { multipleMongooseToObject } = require('../../util/mongoose');

const { mongoosesToObject } = require('../../util/mongoose');

class WatchController {
    //[get] (/watch/:slug) the movie that need to be watched
    show(req, res, next) {
        Movie.findOne({ slug: req.params.slug })
            .then(
                (Movie) =>
                    res.render('movie/watch', { Movie: mongoosesToObject(Movie) }),
            )
            .catch(next);
    }


    manage(req, res, next) {
        res.render('movie/manage')
    }

    store(req, res, next) {
        // res.json(req.query);
        const movie = new Movie(req.query);
        movie.save()
            .then(() => res.redirect('/'))
            .catch(error => {
            });
    }

    edit(req, res, next) {
        Movie.findOne({ _id: req.params._id })
            .then(
                (Movie) =>
                    res.render('movie/edit', { Movie: mongoosesToObject(Movie) }),
            )
            .catch(next);
    }

    //[post] /course/:id
    update(req, res, next) {
        Movie.updateOne({ _id: req.params._id }, req.query)
            .then(
                (Movie) =>
                    res.json(req.query),
            )
            .catch(next);
    }


    delete(req, res, next) {
        Movie.deleteOne({ _id: req.params._id })
            .then(
                (Movie) =>
                    res.redirect('/'),
            )
            .catch(next);
    }

}

module.exports = new WatchController();
