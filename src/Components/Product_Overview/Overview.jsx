import React, { useState, useEffect } from "react";
import ImgGallery from "./ImgGallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import { Container } from "@mui/material";

const Overview = (props) => {
  return (
    <Container sx={{ border: 1, display: "flex" }}>
      <ImgGallery />
      <Container justifycontent="space-between" sx={{ my: "4%" }}>
        <ProductInfo />
        <StyleSelector />
        <AddToCart />
      </Container>
    </Container>
  );
};

export default Overview;
