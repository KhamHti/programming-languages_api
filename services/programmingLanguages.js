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

  // getUserByUserId: (id, callBack) => {
  //   pool.query(
  //     `SELECT id, firstName, lastName, gender, email, phNum FROM register WHERE id = ?`,

  //     [id],
  //     (error, results, fields) => {
  //       if (error) {
  //         console.log(error);
  //         callBack(error);
  //       }
  //       return callBack(null, results[0]);
  //     }
  //   );
  // },
  // updateUser: (data, callBack) => {
  //   pool.query(
  //     `UPDATE register SET firstName=?, lastName=?, gender=?, email=?, password=?, phNum=? WHERE id = ?`,
  //     [
  //       data.firstName,
  //       data.lastName,
  //       data.gender,
  //       data.email,
  //       data.password,
  //       data.phNum,
  //       data.id,
  //     ],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }

  //       return callBack(null, results);
  //     }
  //   );
  // },
  // deleteUser: (data, callBack) => {
  //   pool.query(
  //     `DELETE FROM register WHERE id = ?`,
  //     [data.id],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },
  // getUserByUserEmail: (email, callBack) => {
  //   pool.query(
  //     `SELECT * FROM register WHERE email = ?`,
  //     [email],
  //     (error, results, fields) => {
  //       if (error) {
  //         console.log(error);
  //         callBack(error);
  //       }
  //       return callBack(null, results[0]);
  //     }
  //   );
  // },
};
