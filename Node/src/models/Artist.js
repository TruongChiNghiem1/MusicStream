const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String },
    image: { type: String } // Thêm trường image
});

module.exports = mongoose.model('Artist', artistSchema);