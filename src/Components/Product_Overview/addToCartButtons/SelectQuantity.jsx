import React, { useState, useEffect } from "react";
import { MenuItem, Menu, Button } from "@mui/material";

const SelectQuantityButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentQty, setQty] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setQty(e);
    handleClose();
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
        {currentQty}
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
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>1</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>2</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>3</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>4</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>5</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>6</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>7</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>8</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>9</MenuItem>
        <MenuItem onClick={(e) => handleChange(e.target.innerText)}>
          10
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SelectQuantityButton;
