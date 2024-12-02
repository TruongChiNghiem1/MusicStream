const express = require('express');
const router = express.Router();
const musicController = require('../controllers/MusicController');

// Lấy danh sách tất cả albums
router.get('/albums', musicController.getAllAlbums);

// Lấy danh sách tất cả bài hát
router.get('/songs', musicController.getAllSongs);

// Lấy danh sách bài hát theo album
router.get('/albums/:albumId/songs', musicController.getSongsByAlbum);

module.exports = router;
