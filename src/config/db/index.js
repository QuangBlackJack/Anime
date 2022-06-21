const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://Quang:cisco@cluster0.9oles.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully!!!');
    } catch (error) {
        console.log('connect failed!!!');
    }
}

module.exports = { connect };
