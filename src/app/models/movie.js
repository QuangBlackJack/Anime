const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Movie = new Schema({
    name: { type: String, maxlength: 255, default: 'Quang hacker dep trai' },
    code: { type: String, maxlength: 255, default: 'Quang hacker dep trai' },
    image: { type: String, maxlength: 255, default: 'Quang hacker dep trai' },
    movieid: { type: String, maxlength: 255, default: 'Quang hacker dep trai' },
    slug: { type: String, maxlength: 255, slug: 'name', unique: true },
    title: { type: String, maxlength: 255, default: 'Quang hacker dep trai' },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Movie', Movie);
