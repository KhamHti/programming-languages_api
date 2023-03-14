const router = require("express").Router();

const { createData, getAll } = require("../controller/programmingLanguages");

/* GET programming languages. */
router.get("/", getAll);

//Post programming languages
router.post("/", createData);

module.exports = router;
