import React, { useState, useEffect } from "react";
import { Container, MenuItem, Menu, Button, Stack } from "@mui/material";
import SelectSizeButton from "./addToCartButtons/SelectSize.jsx";
import SelectQuantityButton from "./addToCartButtons/SelectQuantity.jsx";
import AddToBag from "./addToCartButtons/AddToBag.jsx";
import FavoriteButton from "./addToCartButtons/Favorite.jsx";

const AddToCart = () => {
  return (
    <Container
      disableGutters
      sx={{ border: 1, height: "30%", borderColor: "green", p: 0 }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        disableGutters
        sx={{
          display: "flex",
          height: "35%",
          mb: "5%",
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
