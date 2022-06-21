const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Cart = new Schema({
    name: { type: String, maxlength: 255, default: 'Quang hacker dep trai' },
    image: { type: String, maxlength: 255, default: 'Quang hacker dep trai' },
    price: { type: String, maxlength: 255, default: 'Quang hacker dep trai' },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Cart', Cart);
