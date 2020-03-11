const db = require('./database.model.js');

const Dragon = function(comment) {
  this.name = comment.name;
};

Dragon.create = (newDragon, result) => {
  db.query(
    'SELECT * FROM dragons',
    newDragon,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      return result(null, { id: dbResult.insertId, ...newDragon });
    }
  );
};

Dragon.findAll = result => {
  db.query(
    'SELECT * FROM dragons',
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }
      return result(null, dbResult);
    }
  );
};

Dragon.findById = (dragonId, result) => {
  db.query(
    `SELECT * FROM dragons WHERE id = ${dragonId}`,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      if (dbResult.length) {
        return result(null, dbResult[0]);
      }

      // Not found dragon card with the id
      return result({ kind: 'not_found' }, null);
    }
  );
};

Dragon.update = (id, dragon, result) => {
  db.query(
    'UPDATE dragons SET name = ? WHERE id = ?',
    [dragon.name, id],
    (error, response) => {
      if (error) {
        return result(error, null);
      }

      if (response.affectedRows === 0) {
        // Not found dragon card with the id
        return result({ kind: 'not_found' }, null);
      }

      return result(null, { id: Number(id), ...dragon });
    }
  );
};

Dragon.delete = (id, result) => {
  db.query('DELETE FROM dragons WHERE id = ?', id, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    if (dbResult.affectedRows === 0) {
      // Not found dragon card with the id
      return result({ kind: 'not_found' }, null);
    }

    return result(null, dbResult);
  });
};

module.exports = Dragon;