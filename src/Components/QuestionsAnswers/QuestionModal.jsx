import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  Button,
  Grid,
  TextField,
  styled
 } from "@mui/material";

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

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: p.focusColor
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: p.focusColor
    }
  }
}));

const QuestionModal = ({onQuestionChange, onAddQuestion, onEmailChange, onUserChange, product_id}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const twoFunctionsSubmit = () => {
    onAddQuestion();
    handleClose();
  }

  return (
    <div>
      <Button data-testid="questionModal" size="large" variant="outlined" onClick={handleOpen} style={{width:'200px', height:'75px', color: '#000000', borderColor: '#000000'}}>Ask a question +</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <Typography color="#5A5A5A" id="modal-modal-title" variant="h5" component="h2">
            Ask a question
          </Typography>
          <form onSubmit={twoFunctionsSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <CssTextField focusColor="black" variant="outlined" required type='text' id="outlined-multiline-static" multiline label='Ask a question' rows={4} placeholder="Maximum 1000 characters..." onChange={onQuestionChange} size="medium" style={{width: 800}} inputProps={{ maxLength: 1000}}></CssTextField>
              </Grid>
              <Grid item xs={6}>
                <CssTextField focusColor="black" variant="outlined" required type='text' label='Username' placeholder="Maximum 60 characters..." onChange={onUserChange} size="small" style={{width: 400}} inputProps={{ maxLength: 60}}></CssTextField>
              </Grid>
              <Grid item xs={6}>
                <CssTextField focusColor="black" variant="outlined" required type='email' label='Email' placeholder="Maximum 60 characters..." onChange={onEmailChange} size="small" style={{width: 396}} inputProps={{ maxLength: 60}}></CssTextField>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button data-testid="questionSubmit" type="submit" variant="outlined" style={{width:'800px', height:'50px', color: '#000000', borderColor: '#000000'}}>Submit your question</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default QuestionModal;