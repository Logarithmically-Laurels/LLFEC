import React, { useState, useEffect } from "react";
import { MenuItem, Menu, Button, IconButton, Container } from "@mui/material";

const SelectSizeButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentSize, setSize] = useState("select a size");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setSize(e);
    handleClose(null);
  };

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
        {currentSize}
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
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>
          XS
        </MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>S</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>
          MD
        </MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>
          LG
        </MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>
          XL
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default SelectSizeButton;
