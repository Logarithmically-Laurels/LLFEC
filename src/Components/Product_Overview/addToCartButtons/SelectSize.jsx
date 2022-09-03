import React, { useState, useEffect } from "react";
import { MenuItem, Menu, Button, IconButton, Container } from "@mui/material";

const SelectSizeButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (size) => {
    props.setSize(size);
    props.setQty(1);
    handleClose(null);
  };
  var sizes = Object.values(props.currentStyle);

  var outOfStock = () => {
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i].quantity !== 0) {
        return false;
      }
    }
    props.setOosStatus(true);
    return true;
  };

  if (outOfStock()) {
    return (
      <Container disableGutters sx={{ width: "160%", ml: "0", mr: "10%" }}>
        <Button
          sx={{
            border: 1,
            width: "100%",
            borderRadius: 0,
            color: "red",
            height: "100%",
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          OUT OF STOCK
        </Button>
      </Container>
    );
  } else {
    return (
      <Container disableGutters sx={{ width: "160%", ml: "0", mr: "10%" }}>
        <Button
          sx={{
            border: 1,
            width: "100%",
            borderRadius: 0,
            color: "black",
            height: "100%",
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {props.currentSize.size}
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
          {sizes.map((size, i) => {
            if (size.quantity !== 0) {
              return (
                <MenuItem key={i} onClick={() => handleChange(size)}>
                  {size.size}
                </MenuItem>
              );
            }
          })}
        </Menu>
      </Container>
    );
  }
};

export default SelectSizeButton;
