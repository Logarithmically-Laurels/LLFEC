import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid, TextField } from "@mui/material";

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

const AnswerModal = ({onAnswerSubmit, onChangeNewAnswer, onChangeNewEmail, onChangeNewUsername}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const twoFunctionsSubmit = () => {
    onAnswerSubmit();
    handleClose();
  }

  return (
    <div>
      <Button size="small" variant="outlined" onClick={handleOpen}>Add an answer...</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Write your answer
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField type='text' placeholder='Answer the question...' size="normal" style={{width: 800}} onChange={onChangeNewAnswer} inputProps={{ maxLength: 1000}}></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField type='text' placeholder='Username...' size="small" style={{width: 400}} onChange={onChangeNewUsername} inputProps={{ maxLength: 60}}></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField type='email' placeholder='johnsmith@gmail.com' size="small" style={{width: 396}} onChange={onChangeNewEmail} inputProps={{ maxLength: 60}}></TextField>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button variant="outlined" onClick={twoFunctionsSubmit} style={{width:'800px', height:'50px'}}>Submit your answer</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AnswerModal;