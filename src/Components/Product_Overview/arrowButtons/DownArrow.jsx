import React from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DownArrow = (props) => {
  if (props.info.total === props.info.current) {
    return (
      <IconButton
        disableRipple
        sx={{ p: "0", width: "100%", color: "rgba(255, 255, 255, 0)" }}
      >
        <KeyboardArrowDownIcon
          onClick={(event) => props.handleClick(event, "down")}
        />
      </IconButton>
    );
  } else {
    return (
      <IconButton disableRipple sx={{ p: "0", width: "100%" }}>
        <KeyboardArrowDownIcon
          onClick={(event) => props.handleClick(event, "down")}
        />
      </IconButton>
    );
  }
};

export default DownArrow;
