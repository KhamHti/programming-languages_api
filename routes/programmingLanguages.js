const router = require("express").Router();

const {
  createData,
  getAll,
  getOne,
  updateData,
  deleteData,
} = require("../controller/programmingLanguages");

/* GET programming languages. */
router.get("/", getAll);

//Post programming languages
router.post("/", createData);

//get programming languages by id
router.get("/:id", getOne);

///update programming language
router.put("/", updateData);

//delete programming language
router.delete("/", deleteData);

module.exports = router;
