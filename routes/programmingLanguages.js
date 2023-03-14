const router = require("express").Router();

const {
  createData,
  getAll,
  getOne,
} = require("../controller/programmingLanguages");

/* GET programming languages. */
router.get("/", getAll);

//Post programming languages
router.post("/", createData);

//get programming languages by id
router.get("/:id", getOne);

module.exports = router;
