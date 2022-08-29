import React, { useState, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export default function () {
  const [selected, setSelected] = useState(false);

  if (!selected) {
    return (
      <ToggleButton
        sx={{
          ml: "5%",
          borderRadius: 0,
          borderColor: "black",
        }}
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        <StarBorderIcon />
      </ToggleButton>
    );
  } else {
    return (
      <ToggleButton
        sx={{
          ml: "5%",
          borderRadius: 0,
          borderColor: "black",
        }}
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        <StarIcon />
      </ToggleButton>
    );
  }
}
