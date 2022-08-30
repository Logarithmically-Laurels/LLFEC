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
      Authorization: authToken.default,
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

<<<<<<< HEAD
app.get("/qa/questions", (req, res) => {
  let options = {
    method: "GET",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions",
    headers: {
      Authorization: authToken.default,
      "content-type": "application/json",
    },
    params: {
      product_id: 37312,
    }
  };
  console.log('options', options);
  axios(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.json(err);
    });
});
=======
// app.get("/styles", (req, res) => {
//   let prodId = parseInt(req.headers.prodid);
//   var options = {
//     method: "GET",
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${prodId}/styles`,
//     headers: {
//       Authorization: authToken,
//       "content-type": "application/json",
//     },
//   };
//   axios(options)
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
>>>>>>> main

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
