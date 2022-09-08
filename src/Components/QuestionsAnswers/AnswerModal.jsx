import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid, TextField } from "@mui/material";
import AnswerModalPhotos from './AnswerModalPhotos.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AnswerModal = ({onAnswerSubmit, onChangeNewAnswer, onChangeNewEmail, onChangeNewUsername, onChangePhotos, newPhotos, onURLChange, photoURL, onFileChange, newAnswerBody, newEmail, newUsername}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const twoFunctionsSubmit = (e) => {
    onAnswerSubmit();
    handleClose();
  }

  return (
    <div>
      <Button data-testid="answerModal" size="small" variant="text" onClick={handleOpen} sx={{color:"#5A5A5A", width:'150px', height:'50px'}} >Add answer +</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <Typography color="#5A5A5A" id="modal-modal-title" variant="h5" component="h2">
            Write your answer
          </Typography>
          <form onSubmit={twoFunctionsSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField required type='text' id="outlined-multiline-static" multiline label='Answer the question' rows={4} placeholder="Maximum 1000 characters..." size="normal" style={{width: 800}} onChange={onChangeNewAnswer} inputProps={{ maxLength: 1000}} value={newAnswerBody}></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField required type='text' label='Username' placeholder="Maximum 60 characters..." size="small" style={{width: 400}} onChange={onChangeNewUsername} inputProps={{ maxLength: 60}} value={newUsername}></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField required type='email' label='Email' placeholder="Maximum 60 characters..." size="small" style={{width: 396}} onChange={onChangeNewEmail} inputProps={{ maxLength: 60}} value={newEmail}></TextField>
              </Grid>
              <Grid item xs={12}>
                  {newPhotos.map((photo) => <span><img width={100} height={100} src={`${photo}`}/>&nbsp;&nbsp;</span>)}
              </Grid>
              <Grid item xs={12}>
                <AnswerModalPhotos onChangePhotos={onChangePhotos} newPhotos={newPhotos} onURLChange={onURLChange} photoURL={photoURL} onFileChange={onFileChange}/>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button data-testid="answerSubmit" type="submit" variant="outlined" style={{width:'800px', height:'50px'}}>Submit your answer</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AnswerModal;