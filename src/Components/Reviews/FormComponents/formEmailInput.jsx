
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material";

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

const FormEmailInput = () => {
const [emailDesc, setEmailDest] = useState(false)


  return (
    <>
      <CssTextField
        focusColor="black"
        variant="outlined"
        required
        type="email"
        id="outlined-required"
        placeholder="Email"
        fullWidth
        name="email"
        inputProps={{
          maxLength: 60,
          "data-testid": 'formEmailInputTextField',
        }}
        onChange={()=>{setEmailDest(true)}}
      />
  {emailDesc && <p className='bodyCount'>Email*: For authentication reasons, you will not be emailed.</p>}
    </>);
}



export default FormEmailInput;

