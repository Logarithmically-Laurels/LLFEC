import React, { useState, useEffect } from "react";
import { Container, MenuItem, Menu, Button } from "@mui/material";
import SelectSizeButton from "./addToCartButtons/SelectSize.jsx";
import SelectQuantityButton from "./addToCartButtons/SelectQuantity.jsx";
import AddToBag from "./addToCartButtons/AddToBag.jsx";
import FavoriteButton from "./addToCartButtons/Favorite.jsx";

const AddToCart = () => {
  return (
    <Container
      disableGutters
      sx={{ border: 1, height: "30%", borderColor: "green" }}
    >
      <Container
        disableGutters
        sx={{
          border: 1,
          borderColor: "purple",
          display: "flex",
          height: "35%",
          mb: "5%",
          width: "100%",
        }}
      >
        <SelectSizeButton />
        <SelectQuantityButton />
      </Container>
      <Container
        disableGutters
        sx={{
          border: 1,
          borderColor: "purple",
          display: "flex",
          height: "35%",
        }}
      >
        <AddToBag />
        <FavoriteButton />
      </Container>
    </Container>
  );
};

export default AddToCart;
