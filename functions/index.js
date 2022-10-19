require("dotenv").config();
const axios = require("axios");
const key = process.env.KEY;

exports.getDistance = async () => {
  let { data } = await axios({
    method: "GET",
    url: "https://maps.googleapis.com/maps/api/distancematrix/json",
    params: {
      key,
      origins: "Lagos",
      destinations: "Benin City",
    },
  });
  return data;
};
