import React, { useState, useEffect } from "react";
import ImgGallery from "./ImgGallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import ProductDescription from "./ProductDescription.jsx";
import axios from "axios";
import { Container, Paper } from "@mui/material";

const dummyData = require("./dummydata.js").data;

const Overview = (props) => {
  // var currentProductId = props.currentProduct.id;
  var currentProductId = 37315;
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
        if (response.data.results[0].photos[0].url !== null) {
          setAllStyles(response.data);
          setCurrentStyle(response.data.results[0]);
        } else {
          setAllStyles(response.data);
          //TODO change bellow to a dummy data file with an object that will display oos images
          // setCurrentStyle(allStyles.results[0]);
          setCurrentStyle(response.data.results[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container disableGutters maxWidth={false} sx={{ mb: "2.5%" }}>
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
          <ProductInfo prodId={currentProductId} prodInfo={currentStyle} />
          <StyleSelector
            prodId={currentProductId}
            currentStyle={currentStyle}
            allStyles={allStyles}
            setStyle={setCurrentStyle}
          />
          <AddToCart currentStyle={currentStyle} />
        </Container>
      </Container>
      <Container>
        <ProductDescription prodInfo={props.currentProduct} />
      </Container>
    </Container>
  );
};

export default Overview;
