import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const ProductDescription = (props) => {
  const content1 = (
    <div>
      <Typography variant="h6" sx={{ mb: "5%" }}>
        {props.prodInfo.slogan}
      </Typography>
      <Typography variant="body2">{props.prodInfo.description}</Typography>
    </div>
  );
  const content2 = (
    <div>
      <Typography align="justify">
        <CheckIcon /> GMO and Pesticide-free
      </Typography>
      <Typography>
        <CheckIcon /> Made with 100% Gentetic Modification
      </Typography>
      <Typography>
        <CheckIcon /> This is made up
      </Typography>
      <Typography>
        <CheckIcon /> It doesn't matter
      </Typography>
    </div>
  );
  console.log(props.prodInfo);
  return (
    <Grid
      disableGutters
      container
      direction="row"
      wrap="nowrap"
      sx={{ my: "3%", pl: "10%" }}
    >
      <Grid item xs={8} sx={{ mr: "3%" }}>
        {content1}
      </Grid>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ border: 1, backgroundColor: "black" }}
      ></Divider>
      <Grid item xs={3} sx={{ ml: "2%" }}>
        {content2}
      </Grid>
    </Grid>
  );
};

export default ProductDescription;
