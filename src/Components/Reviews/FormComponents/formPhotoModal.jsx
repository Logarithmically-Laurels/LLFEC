import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const FormPhotoModal = ({ photos, handlePhotoUpload, handlePhotoDelete, handleClose, onFileChange }) => {

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

    <div>

      <Box sx={style} textAlign="center">
        <Typography color="#5A5A5A" variant="h5" id="child-modal-title">Add Photos</Typography>
        <form onSubmit={(e) => {
          e.preventDefault()
          // handlePhotoUpload(e)
          handleClose()
        }}>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField label='Paste Photo URL Here' placeholder="Image URL" size="normal" style={{ width: 600 }} name="currentPhotoURL"></TextField>
            </Grid>
            <Grid item xs={12}>
              <Divider>OR</Divider>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label" size="large" endIcon={<AddAPhotoIcon />}>
                UPLOAD PHOTO
                <input hidden type='file' name="currentPhotoFile" onChange={onFileChange} onClick={e => (e.target.value = null)}></input>
              </Button>
            </Grid>
            <Grid item xs={12}>
              {photos.length > 0 &&
                photos.map((photo, index) => (
                  <img src={photo} alt="reviewer photo" className='thumbnailModal' key={index} onClick={(index) => { handlePhotoDelete(index) }}></img>
                ))
              }
            </Grid>
            <Grid item xs={12}>
              <Typography color="#5A5A5A">You can upload {5 - photos.length} more photos</Typography>
            </Grid>
            <Grid item xs={6} textAlign="center">
              <Button type="submit" style={{ width: '300px', height: '50px' }}>Submit Photo</Button>
            </Grid>
            <Grid item xs={6} textAlign="center">
              <Button onClick={handleClose} style={{ width: '300px', height: '50px' }}>Close</Button>
            </Grid>
          </Grid>
        </form>
      </Box >
    </div >
  );
}



export default FormPhotoModal;

