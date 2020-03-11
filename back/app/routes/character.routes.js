const express = require('express');
const character = require('../controllers/character.controllers.js');

// Initialize a router
const router = express.Router();

// Create a new character
router.post('/', character.create);

// Read all character
router.get('/', character.findAll);

// Read character by ID
router.get('/:characterId', character.findById);

// Update character
router.put('/:characterId', character.update);

// Delete character
router.delete('/:characterId', character.delete);

module.exports = router;