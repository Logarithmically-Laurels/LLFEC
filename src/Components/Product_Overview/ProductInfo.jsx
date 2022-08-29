import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

const ProductInfo = (props) => {
  console.log(props.prodInfo);
  return (
    <Container disableGutters sx={{ border: 1, height: "40%", width: "100%" }}>
      <div>[*****] read all reviews</div>
      <Typography variant="h5" sx={{ fontsize: 20 }}>
        {props.prodInfo.name}
      </Typography>
      <Typography sx={{ my: "5%" }}>${props.prodInfo.default_price}</Typography>
    </Container>
  );
};

export default ProductInfo;
