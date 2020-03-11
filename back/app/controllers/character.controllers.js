const Character = require('../models/character.model.js');

// Create a new character
exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  // Create a character
  const character = new Character({
    name: request.body.name ? request.body.name : null
  });

  // Save character in the database
  Character.create(character, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the character card.'
      });
    }
    return response.send(data);
  });
};

// Get all character
exports.findAll = (request, response) => {
  Character.findAll((error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving character card.'
      });
    }
    return response.send(data);
  });
};

// Get character by ID
exports.findById = (request, response) => {
  Character.findById(request.params.characterId, (error, dbResult) => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found character card with id ${request.params.characterId}.`
        });
      }
      return response.status(500).send({
        message: `Error retrieving character card with id ${request.params.characterId}`
      });
    }
    return response.send(dbResult);
  });
};

// Update character
exports.update = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  Character.update(
    request.params.characterId,
    new Character(request.body),
    (error, data) => {
      if (error) {
        if (error.kind === 'not_found') {
          return response.status(404).send({
            message: `Not found character card with id ${request.params.characterId}.`
          });
        }
        return response.status(500).send({
          message: `Error updating character card with id ${request.params.characterId}`
        });
      }
      return response.send(data);
    }
  );
};

// Delete character
exports.delete = (request, response) => {
  Character.delete(request.params.characterId, error => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found character card with id ${request.params.characterId}.`
        });
      }
      return response.status(500).send({
        message: `Could not delete character card with id ${request.params.characterId}`
      });
    }
    return response.send({ message: `character card was deleted successfully!` });
  });
};
