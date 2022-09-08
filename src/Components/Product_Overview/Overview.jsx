import React, { useState, useEffect } from "react";
import ImgGallery from "./ImgGallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import ProductDescription from "./ProductDescription.jsx";
import axios from "axios";
import { Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const dummyData = require("./dummydata.js").data;

const Overview = (props) => {
  var currentProductId = props.currentProduct.id;
  // var currentProductId = 37312;
  const [allStyles, setAllStyles] = useState(dummyData);
  const [currentStyle, setCurrentStyle] = useState(allStyles.results[0]);
  const [oosStatus, setOosStatus] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    display: "flex",
    maxWidth: "1500px",
    height: "100%",
    margin: "auto",
    // justifyContent: "center",
    // alignItems: 'center',
    color: theme.palette.text.secondary,
    marginBottom: "10px",
    marginTop: "10px",
    paddingTop: "15px",
  }));

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
        if (response.data.results[0].photos[0].url === null) {
          setOosStatus(true);
        }
        setAllStyles(response.data);
        setCurrentStyle(response.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Item disableGutters>
      <Container disableGutters maxWidth={false} sx={{ mb: "2.5%" }}>
        <Container
          sx={{
            display: "flex",
          }}
        >
          <ImgGallery oosStatus={oosStatus} stylesToDisplay={currentStyle} />
          <Container
            disableGutters
            justifycontent="space-between"
            sx={{
              my: "4%",
              width: "40%",
            }}
          >
            <ProductInfo
              prodCat={props.currentProduct.category}
              prodId={currentProductId}
              prodInfo={currentStyle}
            />
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
    </Item>
  );
};

export default Overview;
