const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/take-screenshot", (req, res) => {
  const headers = {
    headers: {
      Authorization: "Bearer 9c0f639a4fa2d2e645e48668b7dc5d79",
    },
  };

  axios
    .get(
      `https://api.screenshots.so/v1?url=https%3A%2F%2F${req.body.website}&device=desktop&${req.body.size}&disableCache=false`,
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
