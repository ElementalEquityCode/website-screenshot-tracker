const axios = require("axios");
const express = require("express");
const process = require("process");
require("dotenv").config();
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://screenshottracker.danielvalencia.dev"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());

app.post("/take-screenshot", (req, res) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  axios
    .get(
      `https://api.screenshots.so/v1?url=https%3A%2F%2F${req.body.website}&device=desktop&${req.body.size}&disableCache=false`,
      headers
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send("Error taking screenshot");
    });
});

app.listen(process.env.PORT);
