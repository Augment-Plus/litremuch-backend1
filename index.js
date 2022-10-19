const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  res.send({
    api: "live",
    version: 1,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
