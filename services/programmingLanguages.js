const pool = require("../config");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO programming_languages( name, released_year, githut_rank, pypl_rank, tiobe_rank) VALUES(?,?,?,?,?,?)`,
      [
        // data.id,
        data.name,
        data.released_year,
        data.githut_rank,
        data.pypl_rank,
        data.tiobe_rank,
      ],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getAll: (callBack) => {
    pool.query(`SELECT * FROM programming_languages`, [], (error, results) => {
      if (error) {
        console.log(error);
        return callBack(error);
      }
      return callBack(null, results);
    });
  },

  getProgrammingLanguageById: (id, callBack) => {
    pool.query(
      `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank FROM programming_languages WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  updateData: (data, callBack) => {
    pool.query(
      `UPDATE programming_languages SET name=?, released_year=?, githut_rank=?, pypl_rank=?, tiobe_rank=? WHERE id = ?`,
      [
        data.name,
        data.released_year,
        data.githut_rank,
        data.pypl_rank,
        data.tiobe_rank,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  deleteData: (data, callBack) => {
    pool.query(
      `DELETE FROM programming_languages WHERE id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
