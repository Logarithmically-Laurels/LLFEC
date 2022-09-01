
import React, { useState } from "react";
import TextField from '@mui/material/TextField';

const FormEmailInput = ({ emailRef }) => {



  return (
    <>
      <TextField
        required
        id="outlined-required"
        placeholder="Email"
        fullWidth
        name="email"
        inputRef={emailRef}
        inputProps={{
          maxLength: 60
        }}

      />
  {emailRef && <p>Email*: For authentication reasons, you will not be emailed.</p>}
    </>);
}



export default FormEmailInput;

