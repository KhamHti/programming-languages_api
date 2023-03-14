require("dotenv").config();
const express = require("express");

const programmingLanguagesRouter = require("./routes/programmingLanguages");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/data", programmingLanguagesRouter);

//error handler middleware
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   console.error(err.message, err.stack);
//   res.status(statusCode).json({ message: err.message });
//   return;
// });

app.listen(process.env.PORT, () => {
  console.log("Example app listening at ", process.env.PORT);
});
