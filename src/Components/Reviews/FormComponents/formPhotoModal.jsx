import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FormPhotoModal = ({ photos, handlePhotoUpload, handlePhotoDelete, handleClose }) => {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    height: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    maxHeight: '70vh',
    bgcolor: 'background.paper',
    // bgcolor: 'white',
    border: '2px solid #000',

    boxShadow: 24,
    p: 4,

  };


  return (

<>

    <form
      onSubmit={(e) => {
        console.log('form submit')
        handlePhotoUpload(e)
        handleClose()
      }}>

      <Box
        sx={{
          ...style,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"Text Text Text Text Button"
         "photo photo photo photo photo"`,
        }} >
        <Box sx={{ gridArea: 'Text' }}>
          <TextField
            required
            id="outlined-required"
            placeholder="Insert photo url here"
            fullWidth
            name="currentPhoto"

          />
        </Box>
        <Box sx={{ gridArea: 'Button', alignItems: 'center' }}>
          <Button variant="outlined" type="submit">
            Submit Photo
          </Button>
        </Box>
        <Box sx={{ gridArea: 'photo' }}>
          {photos.length > 0 &&
            photos.map((photo, index) => (
              <img src={photo} alt="reviewer photo" className='thumbnailModal' key={index} onClick={(index) => { handlePhotoDelete(index) }}></img>
            ))
          }
        </Box>
      </Box>
    </form>


    </>
  );
}



export default FormPhotoModal;

