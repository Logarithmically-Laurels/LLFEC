import React, { useState, useEffect } from "react";
import ImgGallery from "./ImgGallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import ProductDescription from "./ProductDescription.jsx";
import axios from "axios";
import { Container } from "@mui/material";
const dummyData = require("./dummydata.js").data;

const Overview = (props) => {
  var currentProductId = 37311; /*props.currentProduct.id*/
  // console.log("CURRENT PROD ID: ", currentProductId);
  const [allStyles, setAllStyles] = useState(dummyData);
  const [currentStyle, setCurrentStyle] = useState(allStyles.results[0]);

  useEffect(() => {
    let options = {
      url: "/styles",
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      params: { prodId: currentProductId },
    };

    axios(options)
      .then((response) => {
        setAllStyles(response.data);
        setCurrentStyle(response.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container disableGutters>
      <Container
        sx={{
          border: 1,
          display: "flex",
        }}
      >
        <ImgGallery stylesToDisplay={currentStyle} />
        <Container
          disableGutters
          justifycontent="space-between"
          sx={{
            my: "4%",
            width: "40%",
          }}
        >
          <ProductInfo prodInfo={props.currentProduct} />
          <StyleSelector
            prodId={currentProductId}
            currentStyle={currentStyle}
            allStyles={allStyles}
            setStyle={setCurrentStyle}
          />
          <AddToCart />
        </Container>
      </Container>
      <Container>
        <ProductDescription prodInfo={props.currentProduct} />
      </Container>
    </Container>
  );
};

export default Overview;
