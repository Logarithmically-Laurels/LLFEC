import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Avatar } from "@mui/material";
import axios from "axios";

const StyleSelector = (props) => {
  // console.log(props.prodId);
  // let options = {
  //   url: "/styles",
  //   method: "GET",
  //   headers: { "Content-Type": "application/json", prodId: props.prodId },
  // };

  // useEffect(() => {
  //   axios(options).then((result) => {
  //     console.log(result.data);
  //   });
  // });

  //current product Id will default to first style
  //make api call to retrieve product styles.
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/`${props.currentProductId}`/styles
  // setCurrentStyle(response from api call)
  console.log(props);
  return (
    <Container
      disableGutters
      sx={{ border: 1, height: "33%", width: "100%", height: "40%" }}
    >
      <Container disableGutters sx={{ display: "flex", height: "20%" }}>
        <Typography sx={{ fontWeight: "bold" }}>{"Style >   "} </Typography>
        <Typography sx={{ ml: "3%" }}> {props.currentStyle.name}</Typography>
      </Container>

      <Container
        disableGutters
        sx={{
          display: "grid",
          columnGap: 0,
          rowGap: 0,
          gridTemplateColumns: "repeat(4, 1fr)",
          ml: "2%",
          my: "0%",
          width: "100%",
          height: "60%",
        }}
      >
        {props.allStyles.results.map((style, index) => {
          return (
            <Avatar
              onClick={() => props.setStyle(style.style_id)}
              key={index}
              src={style.photos[0].thumbnail_url}
            />
          );
        })}
      </Container>
    </Container>
  );
};

export default StyleSelector;
