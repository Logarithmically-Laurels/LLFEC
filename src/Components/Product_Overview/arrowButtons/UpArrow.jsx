import React from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const UpArrow = (props) => {
  if (0 === props.info) {
    return (
      <IconButton disabled sx={{ p: "0", width: "100%" }}>
        <KeyboardArrowUpIcon onClick={() => props.handleClick("up")} />
      </IconButton>
    );
  } else {
    return (
      <IconButton disableRipple sx={{ p: "0", width: "100%" }}>
        <KeyboardArrowUpIcon onClick={() => props.handleClick("up")} />
      </IconButton>
    );
  }
};

export default UpArrow;
