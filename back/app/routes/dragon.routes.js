const express = require('express');
const dragon = require('../controllers/dragon.controllers.js');

// Initialize a router
const router = express.Router();

// Create a new dragon
router.post('/', dragon.create);

// Read all dragon
router.get('/', dragon.findAll);

// Read dragon by ID
router.get('/:dragonId', dragon.findById);

// Update dragon
router.put('/:dragonId', dragon.update);

// Delete dragon
router.delete('/:dragonId', dragon.delete);

module.exports = router;