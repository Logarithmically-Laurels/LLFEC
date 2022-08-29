import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

const ProductInfo = () => {
  return (
    <Container sx={{ border: 1, height: "40%", width: "100%" }}>
      <div>[*****] read all reviews</div>
      <Typography variant="h5" sx={{ fontsize: 20 }}>
        Expanded Product Name
      </Typography>
      <Typography sx={{ my: "5%" }}>$Price$</Typography>
    </Container>
  );
};

export default ProductInfo;
