const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('actor_1'); // Render actor1.ejs
});

router.get('/actor_2', (req, res) => {
  res.render('actor_2');
});

router.get('/actor_3', (req, res) => {
  res.render('actor_3');
});

router.get('/actor_4', (req, res) => {
  res.render('actor_4');
});

module.exports = router;
