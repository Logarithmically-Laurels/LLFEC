import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  IconButton,
  Stack,
} from "@mui/material";
import CropFreeIcon from "@mui/icons-material/CropFree";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  backgroundImage: "background.paper",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  border: 0.6,
  boxShadow: 24,
  p: 4,
  backgroundColor: "rgba(220, 220, 220, .9)",
};

const PhotoModal = (props) => {
  style.backgroundImage = props.mainImg;

  return (
    <Box sx={{ height: "0" }}>
      <Button
        sx={{ position: "relative", justifyContent: "end" }}
        onClick={props.handleOpen}
      >
        <CropFreeIcon sx={{ color: "black" }} />
      </Button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton>
            <CloseIcon
              onClick={(e) => {
                props.handleClose(e);
              }}
            />
          </IconButton>
          <Stack
            direction="row"
            justifyContent="space-around"
            sx={{ width: "90%", mx: "auto", mt: "43%" }}
          >
            <IconButton
              disableRipple
              onClick={(event) => props.handleClick(event, "left")}
            >
              <KeyboardArrowLeftIcon
                disableRipple
                sx={{
                  backgroundColor: "rgba(255, 255, 255, .3)",
                }}
              />
            </IconButton>
            <Stack direction="row">
              {props.allPhotos.map((photo, index) => {
                if (props.currentIndex === photo.index) {
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
                        borderColor: "white",
                        backgroundImage: `url(${photo.thumbnail_url}`,
                        key: { index },
                      }}
                      onClick={() => props.handleClick(index)}
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
                        key: { index },
                      }}
                      onClick={() => props.handleClick(index)}
                    ></Box>
                  );
                }
              })}
            </Stack>

            <IconButton
              disableRipple
              onClick={(event) => props.handleClick(event, "right")}
            >
              <KeyboardArrowRightIcon
                disableRipple
                sx={{
                  backgroundColor: "rgba(255, 255, 255, .3)",
                }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default PhotoModal;
