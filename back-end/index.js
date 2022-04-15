const axios = require("axios");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/take-screenshot", (req, res) => {
  const headers = {
    headers: {
      Authorization: "Bearer 9c0f639a4fa2d2e645e48668b7dc5d79",
    },
  };

  axios
    .get(
      "https://api.screenshots.so/v1?url=https%3A%2F%2Fvalenciatorreslaw.com&device=desktop&width=1920&height=900&fullPage=true&disableCache=false",
      headers
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(400).send("Error taking screenshot");
    });
});

app.listen(8080, () => {
  "Started listening on port 8080";
});
