const express = require('express');

const character = require('./character.routes');
const dragon = require('./dragon.routes');

const router = express.Router();


router.use('/characters', character);
router.use('/dragons', dragon);

module.exports = router;