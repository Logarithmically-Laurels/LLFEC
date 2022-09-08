import React, { useState, useEffect } from "react";
import { Container, Stack, IconButton, Box } from "@mui/material";
import PhotoModal from "./PhotoModal.jsx";
import DownArrow from "./arrowButtons/DownArrow.jsx";
import UpArrow from "./arrowButtons/UpArrow.jsx";
import Divider from "@mui/material/Divider";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ImgGallery = (props) => {
  var addIndex = function (array) {
    for (var i = 0; i < array.length; i++) {
      array[i].index = i;
    }

    return array;
  };
  //all photos for current style
  var allPhotos = addIndex(props.stylesToDisplay.photos);

  //will store up to 7 photos  for carousel;
  var stylePhotosToDisplay;

  //sets photos to display
  if (allPhotos.length > 7) {
    stylePhotosToDisplay = allPhotos.slice(0, 7);
  } else {
    stylePhotosToDisplay = allPhotos;
  }
  //Total Number of thumbails for conditional rendering
  var totalNumOfPhotos = props.stylesToDisplay.photos.length - 1;

  //states to manage img gallery
  const [mainImg, setMainImg] = useState(
    `url(${props.stylesToDisplay.photos[0].url}`
  );
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [firstImgIndex, setFirstImgIndex] = useState(0);
  const [lastImgIndex, setLastImgIndex] = useState(
    stylePhotosToDisplay.length - 1
  );
  const [stylePhotos, setStylePhotos] = useState(stylePhotosToDisplay);

  //states to manage modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  useEffect(() => {
    setMainImg(`url(${props.stylesToDisplay.photos[0].url})`);
    setStylePhotos(stylePhotosToDisplay);
  }, [props.stylesToDisplay]);

  const getImgUrl = (i) => {
    let url = allPhotos[i].url;
    return `url(${url})`;
  };

  const handleClick = (event, e) => {
    event.stopPropagation();
    var tempImgIndex = currentImgIndex;
    if (Number(e) || e == "0") {
      let imgUrl = getImgUrl(e);
      setCurrentImgIndex(e);
      setMainImg(imgUrl);
    } else if (e === "left") {
      console.log("first img index: ", firstImgIndex);
      console.log("tempImgIndex: ", tempImgIndex);
      console.log("first img index: ", firstImgIndex);
      if (firstImgIndex > 0 && tempImgIndex === firstImgIndex) {
        tempImgIndex--;
        var newSet = allPhotos.slice(firstImgIndex - 1, lastImgIndex);
        setStylePhotos(newSet);
        setCurrentImgIndex(tempImgIndex);
        setMainImg(getImgUrl(tempImgIndex));
        setFirstImgIndex(firstImgIndex - 1);
        setLastImgIndex(lastImgIndex - 1);
      } else if (tempImgIndex !== 0) {
        tempImgIndex--;
        setCurrentImgIndex(tempImgIndex);
        setMainImg(getImgUrl(tempImgIndex));
      }
    } else if (e === "right") {
      if (currentImgIndex !== props.stylesToDisplay.photos.length - 1) {
        if (tempImgIndex === lastImgIndex && tempImgIndex < allPhotos.length) {
          tempImgIndex++;
          var newSet = allPhotos.slice(firstImgIndex + 1, lastImgIndex + 2);
          setStylePhotos(newSet);
          setCurrentImgIndex(tempImgIndex);
          setMainImg(getImgUrl(tempImgIndex));
          setFirstImgIndex(firstImgIndex + 1);
          setLastImgIndex(lastImgIndex + 1);
        } else {
          tempImgIndex++;
          setCurrentImgIndex(tempImgIndex);
          setMainImg(getImgUrl(tempImgIndex));
        }
      }
    } else if (e === "up") {
      if (tempImgIndex > 0) {
        if (firstImgIndex > 0 && tempImgIndex === firstImgIndex) {
          tempImgIndex--;
          var newSet = allPhotos.slice(firstImgIndex - 1, lastImgIndex);
          setStylePhotos(newSet);
          setCurrentImgIndex(tempImgIndex);
          setMainImg(getImgUrl(tempImgIndex));
          setFirstImgIndex(firstImgIndex - 1);
          setLastImgIndex(lastImgIndex - 1);
        } else {
          tempImgIndex--;
          setCurrentImgIndex(tempImgIndex);
          setMainImg(getImgUrl(tempImgIndex));
        }
      }
    } else if (e === "down") {
      if (tempImgIndex < totalNumOfPhotos) {
        if (tempImgIndex === lastImgIndex && tempImgIndex < allPhotos.length) {
          tempImgIndex++;
          var newSet = allPhotos.slice(firstImgIndex + 1, lastImgIndex + 2);
          setStylePhotos(newSet);
          setCurrentImgIndex(tempImgIndex);
          setMainImg(getImgUrl(tempImgIndex));
          setFirstImgIndex(firstImgIndex + 1);
          setLastImgIndex(lastImgIndex + 1);
        } else {
          tempImgIndex++;
          setCurrentImgIndex(tempImgIndex);
          setMainImg(getImgUrl(tempImgIndex));
        }
      }
    }
  };

  return (
    <Container
      disableGutters
      onClick={handleOpen}
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
        <UpArrow info={currentImgIndex} handleClick={handleClick} />
        {stylePhotos.map((photo) => {
          if (currentImgIndex === photo.index) {
            return (
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  m: "2%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  border: 3,
                  borderRadius: 1,
                  borderColor: "black",
                  backgroundImage: `url(${photo.thumbnail_url}`,
                  key: photo.index,
                }}
                onClick={(event) => handleClick(event, photo.index)}
              ></Box>
            );
          } else {
            return (
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  m: "2%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  border: 1,
                  borderRadius: 1,
                  borderColor: "black",
                  backgroundImage: `url(${photo.thumbnail_url}`,
                  key: photo.index,
                }}
                onClick={(event) => handleClick(event, photo.index)}
              ></Box>
            );
          }
        })}
        <DownArrow
          info={{ total: totalNumOfPhotos, current: currentImgIndex }}
          handleClick={handleClick}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "120%", my: "40%", mx: "1%" }}
      >
        <IconButton
          disableRipple
          onClick={(event) => handleClick(event, "left")}
        >
          <KeyboardArrowLeftIcon
            sx={{
              backgroundColor: "rgba(255, 255, 255, .3)",
            }}
          />
        </IconButton>
        <IconButton
          disableRipple
          onClick={(event) => handleClick(event, "right")}
        >
          <KeyboardArrowRightIcon
            sx={{
              backgroundColor: "rgba(255, 255, 255, .3)",
            }}
          />
        </IconButton>
      </Stack>
      <PhotoModal
        allPhotos={props.stylesToDisplay.photos}
        currentIndex={currentImgIndex}
        mainImg={mainImg}
        handleClick={handleClick}
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default ImgGallery;
