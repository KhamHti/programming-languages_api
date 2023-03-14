const {
  create,
  getAll,
  getProgrammingLanguageById,
} = require("../services/programmingLanguages");

module.exports = {
  createData: (req, res) => {
    const body = req.body;
    console.log(body);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getAll: (req, res) => {
    getAll((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getOne: (req, res) => {
    const id = req.params.id;
    getProgrammingLanguageById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        res.json({
          success: 0,
          message: "Programming languages Not Found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
