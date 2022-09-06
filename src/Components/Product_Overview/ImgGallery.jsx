import React, { useState, useEffect } from "react";
import { Container, Stack, IconButton, Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PhotoModal from "./PhotoModal.jsx";

const ImgGallery = (props) => {
  const getImgUrl = (i) => {
    let url = props.stylesToDisplay.photos[i].url;
    return `url(${url})`;
  };
  const [mainImg, setMainImg] = useState(
    `url(${props.stylesToDisplay.photos[0].url}`
  );
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  var stylePhotosToDisplay = props.stylesToDisplay.photos;

  if (props.stylesToDisplay.photos.length > 7) {
    stylePhotosToDisplay = props.stylesToDisplay.photos.slice(0, 7);
  }
  const [stylePhotos, setStylePhotos] = useState(stylePhotosToDisplay);

  useEffect(() => {
    setMainImg(`url(${props.stylesToDisplay.photos[0].url})`);
  }, [props.stylesToDisplay]);

  //TODO Add arrow functinality to img carosel
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
        var lastImgIndex = props.stylesToDisplay.photos.length - 1;
        setCurrentImgIndex(lastImgIndex);
        setMainImg(getImgUrl(lastImgIndex));
      }
    } else if (e === "right") {
      if (currentImgIndex == props.stylesToDisplay.photos.length - 1) {
        setCurrentImgIndex(0);
        setMainImg(getImgUrl(0));
      } else {
        tempImgIndex++;
        setCurrentImgIndex(tempImgIndex);
        setMainImg(getImgUrl(tempImgIndex));
      }
    } else if (e === "up") {
      console.log("up");
    } else if (e === "down") {
      console.log("down");
      //assuming the button would be disabled if at the end
      //check what the index of first and last photo are
      // console.log()
      //setStylePhotos(props.stylesToDisplay.photos.slice(first index + 1, last index + 1))
    }
  };

  return (
    <Container
      disableGutters
      onClick={() => {
        //need to have modal show, might need to move modal state/functions into img gallery
        //or if I figure out how to have dom click button for me
      }}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundImage: mainImg,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        mr: "2%",
        cursor: "zoom-in",
      }}
    >
      <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{
          borderRadius: 3,
          width: "15%",
          mt: "5%",
          mb: "30%",
          backgroundColor: "rgba(255, 255, 255, .15)",
          cursor: "pointer",
        }}
      >
        <IconButton sx={{ p: "0", width: "100%" }}>
          <KeyboardArrowUpIcon onClick={() => handleClick("up")} />
        </IconButton>
        {stylePhotosToDisplay.map((photo, index) => {
          return (
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                border: 1,
                borderRadius: 1,
                borderColor: "black",
                backgroundImage: `url(${photo.thumbnail_url}`,
                key: { index },
              }}
              onClick={() => handleClick(index)}
            ></Box>
          );
        })}
        <IconButton sx={{ p: "0", width: "100%" }}>
          <KeyboardArrowDownIcon onClick={() => handleClick("down")} />
        </IconButton>
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
      <PhotoModal img={mainImg} />
    </Container>
  );
};

export default ImgGallery;
