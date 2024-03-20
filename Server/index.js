const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();
const handleError = require("./middlewares/handleError");
const studentRoutes = require("./Routes/StudentRoute");
const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/api/students", studentRoutes);
app.use(handleError);
app.all("/*", (req, res) => {
  res.status(404);
  if (req.accepts("application/json")) {
    res.json("404 ressource not found");
  } else if (req.accepted("text/html")) {
    res.send("Html content , 404 not found");
  } else {
    res.type("text").send("Text content , 404 not found");
  }
});
connect(process.env.CONNECTION_STRING)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server launched on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error trying to connect to the database " + err);
  });
