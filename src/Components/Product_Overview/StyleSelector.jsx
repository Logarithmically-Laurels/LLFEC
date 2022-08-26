import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Avatar } from "@mui/material";

const StyleSelector = () => {
  return (
    <Container sx={{ border: 1, height: "30%" }}>
      <Typography sx={{ fontWeight: "bold" }}>
        Style > Selected Style
      </Typography>

      {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <Item>xs=2</Item>
    </Grid>
  ))}
</Grid> */}
    </Container>
  );
};

export default StyleSelector;
