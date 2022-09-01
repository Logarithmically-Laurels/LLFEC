const express = require("express");
const path = require("path");
const axios = require("axios");
const authToken = require("../config.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname + "/../public")));
app.use(express.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  var options = {
    method: "GET",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products",
    headers: {
      Authorization: authToken.authtoken,
      "content-type": "application/json",
    },
    params: {
      page: req.query.page,
      count: req.query.count,
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
app.get("/reviews/meta", (req, res) => {
  var options = {
    method: "GET",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta",
    headers: {
      Authorization: authToken.authtoken,
      "content-type": "application/json",
    },
    params: {
      product_id: req.query.product_id,
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
app.get("/reviews", (req, res) => {
  var options = {
    method: "GET",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews",
    headers: {
      Authorization: authToken.authtoken,
      "content-type": "application/json",
    },
    params: {
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sort,
      product_id: req.query.product_id,
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
app.post("/reviews", (req, res) => {
  console.log(req.body)
  var options = {
    method: "POST",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews",
    headers: {
      Authorization: authToken.authtoken,
      "content-type": "application/json",
    },
    // query: {
    //   rating: parseInt(req.query.rating),
    //   summary: req.query.summary,
    //   body: req.query.body,
    //   recommend: Boolean(req.query.recommend),
    //   name: req.query.name,
    //   email: req.query.email,
    //   photos: req.query.photos,
    //   characteristics: req.query.characteristics,
    //   product_id: parseInt(req.query.product_id),
    // },
    data: {
      rating: parseInt(req.body.rating),
      summary: req.body.summary,
      body: req.body.body,
      recommend: Boolean(req.body.recommend),
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics,
      product_id: parseInt(req.body.product_id),
    },
  };
  axios(options)
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.send(err);
    });
});


app.put("/reviews/helpful", (req, res) => {
  var options = {
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${req.query.product_id}/helpful`,
    headers: {
      Authorization: authToken.authtoken,
      "content-type": "application/json",
    },
    params: {
      product_id: req.query.product_id,
    },
  };
  axios(options)
    .then((response) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.put("/reviews/report", (req, res) => {
  var options = {
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${req.query.product_id}/report`,
    headers: {
      Authorization: authToken.authtoken,
      "content-type": "application/json",
    },
    params: {
      product_id: req.query.product_id,
    },
  };
  axios(options)
    .then((response) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/qa/questions", (req, res) => {
  let options = {
    method: "GET",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions",
    headers: {
      Authorization: authToken.authtoken,
      "content-type": "application/json",
    },
    params: {},
  };

  axios(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/styles", (req, res) => {
  var prodId = req.query.prodId;
  var options = {
    method: "GET",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${prodId}/styles`,
    headers: {
      Authorization: authToken.authtoken,
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
