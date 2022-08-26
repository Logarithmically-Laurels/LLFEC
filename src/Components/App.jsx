import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
import Overview from "./Product_Overview/Overview.jsx";
=======
import Questions from './QuestionsAnswers/Questions.jsx';
>>>>>>> 032094a7ee05faad81799b63799e5d5f3f7694ef
const authtoken = require("/config.js");

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
  const [currentProduct, setCurrentProduct] = useState(firstProduct[0]);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "/products",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(options)
      .then((results) => {
        console.log(results);
        // setProducts(results.data);
        // setCurrentProduct(results.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>Nav Bar</div>
<<<<<<< HEAD
      <Overview currentProduct={currentProduct} />
      <ReviewApp currentProd={currentProduct}/>
=======
      <Questions currentProd={currentProduct} />
>>>>>>> 032094a7ee05faad81799b63799e5d5f3f7694ef
    </div>
  );
};

export default App;
