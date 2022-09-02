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

const QuestionModal = ({onQuestionChange, onAddQuestion, onEmailChange, onUserChange, product_id}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const twoFunctionsSubmit = () => {
    console.log('hello');
    onAddQuestion();
    handleClose();
  }

  return (
    <div>
      <Button size="large" variant="outlined" onClick={handleOpen} style={{width:'570px', height:'60px'}}>Ask a question +</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Ask a question
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField required type='text' id="outlined-multiline-static" multiline label='Ask a question' rows={4} placeholder="Maximum 1000 characters..." onChange={onQuestionChange} size="medium" style={{width: 800}} inputProps={{ maxLength: 1000}}></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField required type='text' label='Username' placeholder="Maximum 60 characters..." onChange={onUserChange} size="small" style={{width: 400}} inputProps={{ maxLength: 60}}></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField required type='email' label='Email' placeholder="Maximum 60 characters..." onChange={onEmailChange} size="small" style={{width: 396}} inputProps={{ maxLength: 60}}></TextField>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button variant="outlined" onClick={twoFunctionsSubmit} style={{width:'800px', height:'50px'}}>Submit your question</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default QuestionModal;