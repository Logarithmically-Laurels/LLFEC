import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import axios from "axios";

const StyleSelector = (props) => {
  return (
    <Container disableGutters sx={{ border: 1, height: "33%", width: "100%" }}>
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
          my: "0%",
          ml: -2,
          width: "100%",
          height: "60%",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {props.allStyles.results.map((style, index) => {
          if (style.style_id === props.currentStyle.style_id) {
            return (
              <Badge
                color="primary"
                variant="dot"
                overlap="circular"
                invisible={false}
              >
                <Avatar
                  onClick={() => props.setStyle(style)}
                  key={index}
                  src={style.photos[0].thumbnail_url}
                />
              </Badge>
            );
          } else {
            return (
              <Badge
                color="primary"
                variant="dot"
                overlap="circular"
                invisible={true}
              >
                <Avatar
                  onClick={() => props.setStyle(style)}
                  key={index}
                  src={style.photos[0].thumbnail_url}
                />
              </Badge>
            );
          }
        })}
      </Container>
    </Container>
  );
};

export default StyleSelector;
