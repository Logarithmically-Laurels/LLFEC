import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const AddToBag = () => {
  return (
    <Button
      sx={{
        borderRadius: "0",
        width: "70%",
        borderColor: "black",
        color: "black",
      }}
      variant="outlined"
    >
      ADD TO BAG +
    </Button>
  );
};

export default AddToBag;
