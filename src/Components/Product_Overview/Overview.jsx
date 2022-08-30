import React, { useState, useEffect } from "react";
import ImgGallery from "./ImgGallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import { Container } from "@mui/material";

const Overview = (props) => {
  const [currentStyle, setCurrentStyle] = useState({
    style_id: 220998,
    name: "Forest Green & Black",
    original_price: "140.00",
    sale_price: null,
    "default?": true,
    photos: [
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    skus: {
      1281032: {
        quantity: 8,
        size: "XS",
      },
      1281033: {
        quantity: 16,
        size: "S",
      },
      1281034: {
        quantity: 17,
        size: "M",
      },
      1281035: {
        quantity: 10,
        size: "L",
      },
      1281036: {
        quantity: 15,
        size: "XL",
      },
      1281037: {
        quantity: 4,
        size: "XL",
      },
    },
  });
  var currentProductId = props.currentProduct[0].id;

  return (
    <Container
      sx={{
        border: 5,
        borderColor: "green",
        display: "flex",
      }}
    >
      <ImgGallery styleToDisplay={currentStyle} />
      <Container
        disableGutters
        justifycontent="space-between"
        sx={{
          my: "4%",
          border: 5,
          borderColor: "pink",
          width: "40%",
        }}
      >
        <ProductInfo prodInfo={props.currentProduct[0]} />
        <StyleSelector
          prodId={currentProductId}
          currentStyle={currentStyle}
          setStyle={setCurrentStyle}
        />
        <AddToCart />
      </Container>
    </Container>
  );
};

export default Overview;
