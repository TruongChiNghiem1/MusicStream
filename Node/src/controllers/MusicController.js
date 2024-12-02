const Album = require('../models/albums');
const Song = require('../models/song');
const mongoose = require("mongoose");

exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate('songs');
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSongsByAlbum = async (req, res) => {
    const { albumId } = req.params;
    try {
        const album = await Album.aggregate([
            {
                $match: {id: albumId}
            }
            ]);
        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.status(200).json(album);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSong = async (req, res) => {
    const { id } = req.params;

    try {        const song = await Song.aggregate([
            {
                $match: {id: id}
            }
        ]);

        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};