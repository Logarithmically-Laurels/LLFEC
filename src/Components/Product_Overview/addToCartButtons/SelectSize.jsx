import React, { useState, useEffect } from "react";
import { MenuItem, Menu, Button } from "@mui/material";

const SelectSizeButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        sx={{ border: 1, borderRadius: 0 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Select Size
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
        <MenuItem onClick={handleClose}>XS</MenuItem>
        <MenuItem onClick={handleClose}>S</MenuItem>
        <MenuItem onClick={handleClose}>MD</MenuItem>
        <MenuItem onClick={handleClose}>LG</MenuItem>
        <MenuItem onClick={handleClose}>XL</MenuItem>
      </Menu>
    </div>
  );
};

export default SelectSizeButton;
