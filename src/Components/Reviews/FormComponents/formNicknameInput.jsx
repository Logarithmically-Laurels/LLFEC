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

const FormNicknameInput = ({}) => {
const [nicknameDesc, setNicknameDesc] = useState(false)


  return (
    <>
      <CssTextField
        focusColor="black"
        variant="outlined"
        required
        id="outlined-required"
        // label="Review Nickname"
        placeholder="Example: jackson11!"
        fullWidth
        name="nickname"
        inputProps={{
          maxLength: 60,
          'data-testid': 'reviewNicknameInputTextField'
        }}
        onChange={()=> {
          setNicknameDesc(true)
        }}
      />
{nicknameDesc && <p className='bodyCount'>Nickname*: For privacy reasons, do not use your full name or email address.</p>}
    </>);
}



export default FormNicknameInput;

