import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CropFreeIcon from "@mui/icons-material/CropFree";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  style.backgroundImage = props.img;

  return (
    <div>
      <Button onClick={handleOpen}>
        <CropFreeIcon sx={{ color: "black" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onClick={() => handleClose()} sx={style}></Box>
      </Modal>
    </div>
  );
};

export default PhotoModal;
