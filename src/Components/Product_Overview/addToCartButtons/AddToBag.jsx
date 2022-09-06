import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
//TODO alert user in a way other than alert
const AddToBag = (props) => {
  var handleClick = () => {
    if (props.currentSize.size === "Select Size") {
      alert("Please select a size");
      //send to select size drop down
    }
  };

  if (!props.oosStatus) {
    return (
      <Button
        onClick={() => handleClick()}
        sx={{
          borderRadius: "0",
          width: "70%",
          borderColor: "black",
          color: "black",
        }}
        variant="outlined"
      >
        ADD TO CART +
      </Button>
    );
  } else {
    return;
  }
};

export default AddToBag;
