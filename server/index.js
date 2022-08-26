const express = require("express");
const path = require("path");
const axios = require("axios");
const authToken = require("../config.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname + "/../public")));

app.get("/products", (req, res) => {
  var options = {
    method: "GET",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products",
    headers: {
      Authorization: authToken,
      "content-type": "application/json",
    },
  };
  axios(options)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
