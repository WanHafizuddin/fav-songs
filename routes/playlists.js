const express = require ("express");
const router = express.Router();
const Song = require("../models/songs");

const BASE_URL = 'https://fav-songs.onrender.com';

router.get('${BASE_URL}/playlists', (req, res) => {
  Song.fetchAll()
    .then((result) => {
      res.render("playlists", { ply: result.rows, path: "/playlists" });
      console.log(result.rows);
    })
    .catch((err) => console.error("DB Error:", err));
});

module.exports = router;