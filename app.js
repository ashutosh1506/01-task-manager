const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Hello");
});

const port = 3000;
app.listen(port, console.log("Server is listening on port 3000..."));
