import React, { useState, useEffect } from "react";
import { Container, Stack, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ImgGallery = (props) => {
  const getImgUrl = (i) => {
    let url = props.styleToDisplay.photos[i].url;
    return `url(${url})`;
  };
  const [mainImg, setMainImg] = useState(getImgUrl(0));
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleClick = (e) => {
    var tempImgIndex = currentImgIndex;
    if (Number(e) || e === "0") {
      let imgUrl = getImgUrl(e);
      setCurrentImgIndex(e);
      setMainImg(imgUrl);
    } else if (e === "left") {
      if (currentImgIndex > 0) {
        tempImgIndex--;
        setCurrentImgIndex(tempImgIndex);
        setMainImg(getImgUrl(tempImgIndex));
      } else {
        var lastImgIndex = props.styleToDisplay.photos.length - 1;
        setCurrentImgIndex(lastImgIndex);
        setMainImg(getImgUrl(lastImgIndex));
      }
    } else if (e === "right") {
      if (currentImgIndex === props.styleToDisplay.photos.length - 1) {
        setCurrentImgIndex(0);
        setMainImg(getImgUrl(0));
      } else {
        tempImgIndex++;
        setCurrentImgIndex(tempImgIndex);
        setMainImg(getImgUrl(tempImgIndex));
      }
    }
  };

  return (
    <Container
      disableGutters
      sx={{
        border: 1,
        borderColor: "blue",
        width: "100%",
        display: "flex",
        backgroundImage: mainImg,
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
        {props.styleToDisplay.photos.map((photo, index) => {
          return (
            <img
              width="40px"
              height="40px"
              src={photo.thumbnail_url}
              name={index}
              key={index}
              onClick={(e) => handleClick(e.target.name)}
            />
          );
        })}
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%", my: "40%", mx: "1%" }}
      >
        <IconButton onClick={(e) => handleClick("left")}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton onClick={(e) => handleClick("right")}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default ImgGallery;
