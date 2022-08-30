import React, { useState, useEffect } from "react";
import axios from "axios";
import Overview from "./Product_Overview/Overview.jsx";
import ReviewApp from "./Reviews/reviewApp.jsx";
import Questions from "./QuestionsAnswers/Questions.jsx";

const App = () => {
  const firstProduct = [
    {
      id: 37311,
      campus: "hr-rfe",
      name: "Camo Onesie",
      slogan: "Blend in to your crowd",
      description:
        "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      category: "Jackets",
      default_price: "140.00",
      created_at: "2021-08-13T14:37:33.145Z",
      updated_at: "2021-08-13T14:37:33.145Z",
    },
  ];

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
        page: 2,
        count: 20,
      },
    };
    axios(options)
      .then((results) => {
        setProducts(results.data);
        var index = Math.floor(Math.random() * 10);
        setCurrentProduct(results.data[index]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>Nav Bar</div>
      <Overview currentProduct={firstProduct} />
      <Questions currentProd={currentProduct} />
      {/* <ReviewApp currentProd={currentProduct} /> */}
    </div>
  );
};

export default App;
