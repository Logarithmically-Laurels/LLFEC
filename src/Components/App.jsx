import React, { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";
import Overview from "./Product_Overview/Overview.jsx";
import ReviewApp from "./Reviews/reviewApp.jsx";
import Questions from "./QuestionsAnswers/Questions.jsx";
import Navbar from "./Navbar.jsx";
import { Container } from "@mui/material";
import { Element } from "react-scroll";
//import ClickTracker from "./ClickTracker.jsx";

const ClickTracker = React.lazy(() => import("./ClickTracker.jsx"));

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
        setCurrentProduct(products[4]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{width:'100vw', height: '100%', padding:'0px', backgroundColor:"#8D8741"}} >
      {currentProduct && (
        <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <div id="Navbar">
              <ClickTracker widget={"Navbar"} render={(onClickHandler) => (
                <Navbar />
              )} />
          </div>
          <div id="Overview">
              <ClickTracker widget={"Overview"} render={(onClickHandler) => (
                <Overview currentProduct={currentProduct} />
              )} />
          </div>
          <div id="Questions">
              <ClickTracker widget={"Questions"} render={(onClickHandler) => (
                <Questions currentProd={currentProduct} />
              )} />
          </div>
          <div id="Reviews">
              <ClickTracker widget={"Reviews"} render={(onClickHandler) => (
                <Element name="reviews">
                  <ReviewApp currentProd={currentProduct} />
                </Element>
              )} />
          </div>
        </Suspense>
        </>
      )}
    </div>
  );
};

export default App;
