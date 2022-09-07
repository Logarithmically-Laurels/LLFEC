import React, { useState, useEffect } from "react";
import axios from "axios";
import Overview from "./Product_Overview/Overview.jsx";
import ReviewApp from "./Reviews/reviewApp.jsx";
import Questions from "./QuestionsAnswers/Questions.jsx";
import Navbar from "./Navbar.jsx";
import { Container } from "@mui/material";

const App = () => {
  //effect calling api get /products
  const [products, setProducts] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "/products",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        page: 1,
        count: 5,
      },
    };
    axios(options)
      .then((results) => {
        let products = results.data;
        setProducts(products);
        var index = Math.floor(Math.random() * products.length);
        setCurrentProduct(products[index]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {currentProduct && (
        <>
          <Navbar />
          <Overview currentProduct={currentProduct} />
          <Questions currentProd={currentProduct} />
          <ReviewApp currentProd={currentProduct} />
        </>
      )}
    </div>
  );
};

export default App;
