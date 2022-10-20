require("dotenv").config();
const axios = require("axios");
const key = process.env.KEY;

exports.getDistance = async (origins, destinations) => {
  let { data } = await axios({
    method: "GET",
    url: "https://maps.googleapis.com/maps/api/distancematrix/json",
    params: {
      key,
      origins,
      destinations,
    },
  });
  return {
    distance: data.rows[0].elements[0].distance.text,
    duration: data.rows[0].elements[0].duration.text,
    litres: "Yet To Be Determined",
  };
};
