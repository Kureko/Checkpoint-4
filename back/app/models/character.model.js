const db = require('./database.model.js');

const Character = function(comment) {
  this.name = comment.name;
};

Character.create = (newCharacter, result) => {
  db.query(
    'SELECT * FROM characters',
    newCharacter,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      return result(null, { id: dbResult.insertId, ...newCharacter });
    }
  );
};

Character.findAll = result => {
  db.query(
    'SELECT * FROM characters',
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }
      return result(null, dbResult);
    }
  );
};

Character.findById = (characterId, result) => {
  db.query(
    `SELECT * FROM characters WHERE id = ${characterId}`,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      if (dbResult.length) {
        return result(null, dbResult[0]);
      }

      // Not found character with the id
      return result({ kind: 'not_found' }, null);
    }
  );
};

Character.update = (id, character, result) => {
  db.query(
    'UPDATE characters SET name = ? WHERE id = ?',
    [character.name, id],
    (error, response) => {
      if (error) {
        return result(error, null);
      }

      if (response.affectedRows === 0) {
        // Not found character with the id
        return result({ kind: 'not_found' }, null);
      }

      return result(null, { id: Number(id), ...character });
    }
  );
};

Character.delete = (id, result) => {
  db.query('DELETE FROM characters WHERE id = ?', id, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    if (dbResult.affectedRows === 0) {
      // Not found character with the id
      return result({ kind: 'not_found' }, null);
    }

    return result(null, dbResult);
  });
};

module.exports = Character;