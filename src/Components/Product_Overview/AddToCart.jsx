import React, { useState, useEffect } from "react";
import { Container, MenuItem, Menu, Button } from "@mui/material";
import SelectSizeButton from "./addToCartButtons/SelectSize.jsx";
import SelectQuantityButton from "./addToCartButtons/SelectQuantity.jsx";

const AddToCart = () => {
  return (
    <Container sx={{ border: 1, height: "30%", borderColor: "green" }}>
      <Container
        disableGutters
        justifycontent="space-between"
        sx={{
          border: 1,
          borderColor: "purple",
        }}
      >
        <SelectSizeButton />
        <SelectQuantityButton />
      </Container>
    </Container>
  );
};

export default AddToCart;
