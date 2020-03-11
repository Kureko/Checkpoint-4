const Dragon = require('../models/dragon.model.js');

// Create a new dragon
exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  // Create a dragon
  const dragon = new Dragon({
    name: request.body.name ? request.body.name : null
  });

  // Save dragon in the database
  Dragon.create(dragon, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the dragon card.'
      });
    }
    return response.send(data);
  });
};

// Get all dragon
exports.findAll = (request, response) => {
  Dragon.findAll((error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving dragon card.'
      });
    }
    return response.send(data);
  });
};

// Get dragon by ID
exports.findById = (request, response) => {
  Dragon.findById(request.params.dragonId, (error, dbResult) => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found dragon card with id ${request.params.dragonId}.`
        });
      }
      return response.status(500).send({
        message: `Error retrieving dragon card with id ${request.params.dragonId}`
      });
    }
    return response.send(dbResult);
  });
};

// Update dragon
exports.update = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  Dragon.update(
    request.params.dragonId,
    new Dragon(request.body),
    (error, data) => {
      if (error) {
        if (error.kind === 'not_found') {
          return response.status(404).send({
            message: `Not found dragon card with id ${request.params.dragonId}.`
          });
        }
        return response.status(500).send({
          message: `Error updating dragon card with id ${request.params.dragonId}`
        });
      }
      return response.send(data);
    }
  );
};

// Delete dragon
exports.delete = (request, response) => {
  Dragon.delete(request.params.dragonId, error => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found dragon card with id ${request.params.dragonId}.`
        });
      }
      return response.status(500).send({
        message: `Could not delete dragon card with id ${request.params.dragonId}`
      });
    }
    return response.send({ message: `dragon card was deleted successfully!` });
  });
};
