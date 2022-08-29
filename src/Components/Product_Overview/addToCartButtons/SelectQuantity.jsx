import React, { useState, useEffect } from "react";
import { MenuItem, Menu, Button } from "@mui/material";

const SelectQuantityButton = () => {
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
        sx={{
          border: 1,
          borderRadius: 0,
          borderColor: "black",
          color: "black",
          width: 82,
          height: "100%",
          ml: "25%",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        1
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
        <MenuItem onClick={handleClose}>1</MenuItem>
        <MenuItem onClick={handleClose}>2</MenuItem>
        <MenuItem onClick={handleClose}>3</MenuItem>
        <MenuItem onClick={handleClose}>4</MenuItem>
        <MenuItem onClick={handleClose}>5</MenuItem>
        <MenuItem onClick={handleClose}>6</MenuItem>
        <MenuItem onClick={handleClose}>7</MenuItem>
        <MenuItem onClick={handleClose}>8</MenuItem>
        <MenuItem onClick={handleClose}>9</MenuItem>
        <MenuItem onClick={handleClose}>10</MenuItem>
      </Menu>
    </div>
  );
};

export default SelectQuantityButton;
