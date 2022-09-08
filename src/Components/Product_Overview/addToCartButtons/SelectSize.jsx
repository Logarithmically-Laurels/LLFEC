import React, { useState, useEffect } from "react";
import { MenuItem, Menu, Button, IconButton, Container } from "@mui/material";
import { Element } from "react-scroll";

const SelectSizeButton = (props) => {
  // const [anchorEl, setAnchorEl] = useState(null);
  console.log(props);
  const open = Boolean(props.anchorEl);
  const handleClick = (event) => {
    props.setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    props.setAnchorEl(null);
  };

  const handleChange = (size) => {
    props.setSize(size);
    props.setQty(1);
    handleClose(null);
  };

  var sizes = Object.values(props.currentStyle);

  var outOfStock = () => {
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i].quantity !== null) {
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
          //TODO disable or get rid of button animation
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
          <Element data-testid="selectSize">{props.currentSize.size}</Element>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={props.anchorEl}
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
