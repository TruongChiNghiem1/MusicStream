const express = require('express');
const router = express.Router();
const musicController = require('../controllers/MusicController');

// Lấy danh sách tất cả albums
router.get('/albums', musicController.getAllAlbums);

// Lấy danh sách tất cả bài hát
router.get('/songs', musicController.getAllSongs);

// Lấy danh sách bài hát theo album
router.get('/albums/:albumId/songs', musicController.getSongsByAlbum);

// Lấy danh sách ca sĩ
router.get('/artists', async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Lấy thông tin cụ thể một bài hát
router.get('/songs/:id', musicController.getSong);

module.exports = router;
