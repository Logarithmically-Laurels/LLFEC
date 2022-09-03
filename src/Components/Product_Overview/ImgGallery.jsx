import React, { useState, useEffect } from "react";
import { Container, Stack, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PhotoModal from "./PhotoModal.jsx";

const ImgGallery = (props) => {
  console.log("CURRENT PROPS IN IMG GALLERY: ", props.stylesToDisplay);
  const getImgUrl = (i) => {
    let url = props.stylesToDisplay.photos[i].url;
    return `url(${url})`;
  };
  const [mainImg, setMainImg] = useState(
    `url(${props.stylesToDisplay.photos[0].url}`
  );
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  // console.log("MAIN IMG URL: ", mainImg);

  useEffect(() => {
    setMainImg(props.stylesToDisplay.photos[0].url);
  }, [props.stylesToDisplay]);

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
      if (currentImgIndex === props.stylesToDisplay.photos.length - 1) {
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
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundImage: mainImg,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        mr: "2%",
      }}
    >
      <Stack
        justifyContent="space-around"
        alignItems="center"
        sx={{ border: 1, width: "15%", mt: "2%", mb: "30%" }}
      >
        {props.stylesToDisplay.photos.map((photo, index) => {
          return (
            <img
              width="50px"
              height="50px"
              border={"2"}
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
      <PhotoModal img={mainImg} />
    </Container>
  );
};

export default ImgGallery;
