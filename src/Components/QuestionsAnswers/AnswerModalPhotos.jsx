import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid, TextField, Divider, InputAdornment, Input, InputLabel } from "@mui/material";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AnswerModalPhotos = ({ onChangePhotos, newPhotos, onURLChange, photoURL, onFileChange }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (newPhotos.length >= 5) {
    return (
      <div>
        <Button variant="outlined" onClick={handleOpen} style={{width:'800px', height:'50px'}}>Add Photos</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={style} textAlign="center">
            <Typography color="#5A5A5A" variant="h5" id="child-modal-title">Maximum photo upload count reached</Typography>
            <br></br>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  {newPhotos.map((photo) => <span><img width={100} height={100} src={`${photo}`}/>&nbsp;&nbsp;</span>)}
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button onClick={handleClose} style={{width:'600px', height:'50px'}}>Close</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>
        </div>
    );
  } else if (newPhotos.length > 0) {
    return (
      <div>
        <Button variant="outlined" onClick={handleOpen} style={{width:'800px', height:'50px'}}>Add Photos</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={style} textAlign="center">
            <Typography color="#5A5A5A" variant="h5" id="child-modal-title">Add Photos</Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField type='text' label='Paste Photo URL Here' placeholder="Image URL" size="normal" style={{width: 600}} onChange={onURLChange} value={photoURL}></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Divider>OR</Divider>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" component="label" size="large" endIcon={<AddAPhotoIcon/>}>
                    UPLOAD PHOTO
                  <input hidden type='file' onChange={onFileChange} onClick={e => (e.target.value = null)}></input>
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {newPhotos.map((photo) => <span><img width={100} height={100} src={`${photo}`}/>&nbsp;&nbsp;</span>)}
                </Grid>
                <Grid item xs={12}>
                  <Typography color="#5A5A5A">You can upload {5 - newPhotos.length} more photos</Typography>
                </Grid>
                <Grid item xs={6} textAlign="center">
                  <Button onClick={onChangePhotos} style={{width:'300px', height:'50px'}}>Submit Photo</Button>
                </Grid>
                <Grid item xs={6} textAlign="center">
                  <Button onClick={handleClose} style={{width:'300px', height:'50px'}}>Close</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>
        </div>
    );
  } else {
    return (
      <div>
        <Button variant="outlined" onClick={handleOpen} style={{width:'800px', height:'50px'}}>Add Photos</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={style} textAlign="center">
            <Typography color="#5A5A5A" variant="h5" id="child-modal-title">Add Photos</Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField required type='text' label='Paste Photo URL Here' placeholder="Image URL" size="normal" style={{width: 600}} onChange={onURLChange} value={photoURL}></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Divider>OR</Divider>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" component="label" size="large" endIcon={<AddAPhotoIcon/>}>
                    UPLOAD PHOTO
                  <input hidden type='file' onChange={onFileChange} onClick={e => (e.target.value = null)}></input>
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="#5A5A5A">You can upload 5 more photos</Typography>
                </Grid>
                <Grid item xs={6} textAlign="center">
                  <Button onClick={onChangePhotos} style={{width:'300px', height:'50px'}}>Submit Photo</Button>
                </Grid>
                <Grid item xs={6} textAlign="center">
                  <Button onClick={handleClose} style={{width:'300px', height:'50px'}}>Close</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>
        </div>
    );
  }
}

export default AnswerModalPhotos;