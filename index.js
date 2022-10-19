const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { getDistance } = require("./functions");

app.get("/", async (req, res) => {
  let data = await getDistance();
  res.send(data);
});

const port = process.env.PORT || 3000;
const key = process.env.KEY;
app.listen(port, () => {
  console.log("Server listening on port " + port);
  console.log("API Key is " + key);
});
