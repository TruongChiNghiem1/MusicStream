const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, // Thời gian tính bằng giây
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    albums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    }]
}, {
    timestamps: true,
    versionKey: false,
});

const Song = mongoose.model("Song", songSchema);
module.exports = Song