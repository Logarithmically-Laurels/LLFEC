import React, { useState, useEffect } from "react";
import { Container, MenuItem, Menu, Button, Stack } from "@mui/material";
import SelectSizeButton from "./addToCartButtons/SelectSize.jsx";
import SelectQuantityButton from "./addToCartButtons/SelectQuantity.jsx";
import AddToBag from "./addToCartButtons/AddToBag.jsx";
import FavoriteButton from "./addToCartButtons/Favorite.jsx";

const AddToCart = (props) => {
  const [currentSize, setSize] = useState({ size: "Select Size" });
  const [currentQty, setQty] = useState("-");
  const [oosStatus, setOosStatus] = useState(false);
  console.log("LOOK HERE: ", currentSize);
  console.log("also: here ", props.currentStyle.skus);

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
        <SelectSizeButton
          currentSize={currentSize}
          setSize={setSize}
          currentStyle={props.currentStyle.skus}
          setQty={setQty}
          setOosStatus={setOosStatus}
        />
        <SelectQuantityButton
          currentSize={currentSize}
          currentStyle={props.currentStyle.skus}
          currentQty={currentQty}
          setQty={setQty}
        />
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
        <AddToBag oosStatus={oosStatus} currentSize={currentSize} />
        <FavoriteButton />
      </Stack>
    </Container>
  );
};

export default AddToCart;
