import React from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const UpArrow = (props) => {
  if (0 === props.info) {
    return (
      <IconButton
        disableRipple
        sx={{ p: "0", width: "100%", color: "rgba(255, 255, 255, 0)" }}
      >
        <KeyboardArrowUpIcon
          onClick={(event) => props.handleClick(event, "up")}
        />
      </IconButton>
    );
  } else {
    return (
      <IconButton disableRipple sx={{ p: "0", width: "100%" }}>
        <KeyboardArrowUpIcon
          onClick={(event) => props.handleClick(event, "up")}
        />
      </IconButton>
    );
  }
};

export default UpArrow;
