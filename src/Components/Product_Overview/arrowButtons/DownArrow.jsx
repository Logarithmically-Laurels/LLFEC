import React from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DownArrow = (props) => {
  if (props.info.total === props.info.current) {
    return (
      <IconButton disabled sx={{ p: "0", width: "100%" }}>
        <KeyboardArrowDownIcon onClick={() => props.handleClick("down")} />
      </IconButton>
    );
  } else {
    return (
      <IconButton disableRipple sx={{ p: "0", width: "100%" }}>
        <KeyboardArrowDownIcon onClick={() => props.handleClick("down")} />
      </IconButton>
    );
  }
};

export default DownArrow;
