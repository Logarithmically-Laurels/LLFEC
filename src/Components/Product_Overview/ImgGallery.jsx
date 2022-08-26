import React from "react";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { IconButton } from "@mui/material";

const ImgGallery = (props) => {
  return (
    <Container
      disableGutters
      sx={{
        border: 1,
        borderColor: "blue",
        width: "160%",
        display: "flex",
      }}
    >
      <Stack
        justifyContent="space-around"
        alignItems="center"
        sx={{ border: 1, width: "15%", mt: "2%", mb: "30%" }}
      >
        {/* conditionally disabled up arrow */}
        <img src="https://picsum.photos/40/40" />
        <img src="https://picsum.photos/40/40" />
        <img src="https://picsum.photos/40/40" />
        <img src="https://picsum.photos/40/40" />
        <img src="https://picsum.photos/40/40" />
        {/* conditionally disabled down arrow */}
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "110%", height: "0%", my: "40%", mx: "2%" }}
      >
        <IconButton sx={{ border: 1 }}></IconButton>
        <IconButton sx={{ border: 1 }}></IconButton>
      </Stack>
    </Container>
  );
};

export default ImgGallery;
