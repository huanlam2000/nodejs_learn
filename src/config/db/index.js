const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_edu_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully!!!');
    } catch (err) {
        console.log('connect failed!');
    }
}

module.exports = { connect };
