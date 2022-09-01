import React, { useState, useEffect } from "react";
import { Container, MenuItem, Menu, Button, Stack } from "@mui/material";
import SelectSizeButton from "./addToCartButtons/SelectSize.jsx";
import SelectQuantityButton from "./addToCartButtons/SelectQuantity.jsx";
import AddToBag from "./addToCartButtons/AddToBag.jsx";
import FavoriteButton from "./addToCartButtons/Favorite.jsx";

const AddToCart = () => {
  return (
    <Container
      disablegutters
      sx={{ border: 1, height: "30%", borderColor: "green" }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        disablegutters
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
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
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
      </Stack>
    </Container>
  );
};

export default AddToCart;
