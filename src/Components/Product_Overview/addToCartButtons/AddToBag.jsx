import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Element } from "react-scroll";

//TODO alert user in a way other than alert
const AddToBag = (props) => {
  var handleClick = (e) => {
    if (props.currentSize.size === "Select Size") {
      alert("Please select a size");
      props.setAnchorEl(e.currentTarget);
    }
  };

  if (!props.oosStatus) {
    return (
      <Button
        onClick={(e) => handleClick(e)}
        sx={{
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
