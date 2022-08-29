import React from "react";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ImgGallery = (props) => {
  return (
    <Container
      disableGutters
      sx={{
        border: 1,
        borderColor: "blue",
        width: "100%",
        display: "flex",
        backgroundImage: `url(${props.styleToDisplay.photos[0].url})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Stack
        justifyContent="space-around"
        alignItems="center"
        sx={{ border: 1, width: "15%", mt: "2%", mb: "30%" }}
      >
        {props.styleToDisplay.photos.map((photo) => {
          return <img width="40px" height="40px" src={photo.thumbnail_url} />;
        })}
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%", my: "40%", mx: "1%" }}
      >
        <IconButton>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default ImgGallery;
