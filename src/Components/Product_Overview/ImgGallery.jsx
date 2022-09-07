import React, { useState, useEffect } from "react";
import { Container, Stack, IconButton, Box } from "@mui/material";
import PhotoModal from "./PhotoModal.jsx";
import DownArrow from "./arrowButtons/DownArrow.jsx";
import UpArrow from "./arrowButtons/UpArrow.jsx";
import Divider from "@mui/material/Divider";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

var addIndex = function (array) {
  for (var i = 0; i < array.length; i++) {
    array[i].index = i;
  }

  return array;
};

const ImgGallery = (props) => {
  const getImgUrl = (i) => {
    let url = allPhotos[i].url;
    return `url(${url})`;
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

  const [mainImg, setMainImg] = useState(
    `url(${props.stylesToDisplay.photos[0].url}`
  );
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [firstImgIndex, setFirstImgIndex] = useState(0);
  const [lastImgIndex, setLastImgIndex] = useState(stylePhotosToDisplay.length);
  const [stylePhotos, setStylePhotos] = useState(stylePhotosToDisplay);

  useEffect(() => {
    setMainImg(`url(${props.stylesToDisplay.photos[0].url})`);
    setStylePhotos(stylePhotosToDisplay);
  }, [props.stylesToDisplay]);

  const handleClick = (e) => {
    var tempImgIndex = currentImgIndex;
    if (Number(e) || e == "0") {
      let imgUrl = getImgUrl(e);
      setCurrentImgIndex(e);
      setMainImg(imgUrl);
    } else if (e === "left") {
      if (currentImgIndex > 0) {
        tempImgIndex--;
        setCurrentImgIndex(tempImgIndex);
        setMainImg(getImgUrl(tempImgIndex));
      } else {
        var index = props.stylesToDisplay.photos.length - 1;
        setCurrentImgIndex(index);
        setMainImg(getImgUrl(index));
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
      onClick={() => {
        //need to have modal show, might need to move modal state/functions into img gallery
        //or if I figure out how to have dom click button for me // checking on href options
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
        <UpArrow info={currentImgIndex} handleClick={handleClick} />
        {console.log(stylePhotos)}
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
                  border: 2,
                  borderRadius: 1,
                  borderColor: "blue",
                  backgroundImage: `url(${photo.thumbnail_url}`,
                  key: photo.index,
                }}
                onClick={() => handleClick(photo.index)}
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
                onClick={() => handleClick(photo.index)}
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
        <IconButton disableRipple onClick={(e) => handleClick("left")}>
          <KeyboardArrowLeftIcon
            sx={{
              backgroundColor: "rgba(255, 255, 255, .3)",
            }}
          />
        </IconButton>
        <IconButton disableRipple onClick={(e) => handleClick("right")}>
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
      />
    </Container>
  );
};

export default ImgGallery;
