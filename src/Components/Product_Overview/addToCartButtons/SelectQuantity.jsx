import React, { useState, useEffect } from "react";
import { MenuItem, Menu, Button, Container } from "@mui/material";
import { Element } from "react-scroll";

const SelectQuantityButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    props.setQty(e);
    handleClose();
  };

  var sizes = Object.values(props.currentStyle);

  var qtyOfSelectedSize = props.currentSize.quantity;
  var numToDisplay;
  if (qtyOfSelectedSize < 15) {
    numToDisplay = qtyOfSelectedSize;
  } else if (qtyOfSelectedSize >= 15) {
    numToDisplay = 15;
  }

  if (props.currentSize.size === "Select Size") {
    //TODO disable qty button until size is selected
    return (
      <Button
        disabled
        sx={{
          border: 1,
          borderRadius: 0,
          borderColor: "black",
          color: "black",
          width: "100%",
          height: "100%",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Element data-testid="selectQuantity"> - </Element>
      </Button>
    );
  } else {
    return (
      <Container disableGutters sx={{ width: "100%", mr: "0" }}>
        <Button
          sx={{
            border: 1,
            borderRadius: 0,
            borderColor: "black",
            color: "black",
            width: "100%",
            height: "100%",
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {props.currentQty}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {Array.apply(null, { length: numToDisplay }).map((e, i) => {
            return (
              <MenuItem
                key={i}
                onClick={(e) => handleChange(e.target.innerText)}
              >
                {i + 1}
              </MenuItem>
            );
          })}
        </Menu>
      </Container>
    );
  }
};

export default SelectQuantityButton;
