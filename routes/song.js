const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Song = require("../models/songs");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const BASE_URL = 'https://fav-songs.onrender.com';

router.get("${BASE_URL}/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const song = new Song(
    req.body.song.toUpperCase(),
    req.body.artist.toUpperCase(),
    req.body.genre
  );
  song.save().then(() => {
    res.redirect("/");
  });
});

module.exports = router;
