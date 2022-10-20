const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { getDistance } = require("./functions");

app.use(morgan("dev"));
app.use(cors());
app.get("/", async (req, res) => {
  let origins = req.query.origin;
  let destinations = req.query.destination;
  let data = await getDistance(origins, destinations);
  res.send(data);
});

const port = process.env.PORT || 3000;
const key = process.env.KEY;
app.listen(port, () => {
  console.log("Server listening on port " + port);
  console.log("API Key is " + key);
});
