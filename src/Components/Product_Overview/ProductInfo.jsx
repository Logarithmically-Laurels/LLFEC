import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Stars from "../Reviews/stars.jsx";

const ProductInfo = (props) => {
  return (
    <Container disableGutters sx={{ border: 1, height: "33%", width: "100%" }}>
      <Stars product_id={props.prodInfo.id} />
      <Typography variant="body2">CATEGORY</Typography>
      <Typography variant="h5" sx={{ fontsize: 20 }}>
        {props.prodInfo.name}
      </Typography>
      <Typography sx={{ my: "5%" }}>${props.prodInfo.default_price}</Typography>
    </Container>
  );
};

export default ProductInfo;
