import React, { useState } from "react";
import TextField from '@mui/material/TextField';

const FormNicknameInput = ({ nicknameRef }) => {



  return (
    <>
      <TextField
        required
        id="outlined-required"
        // label="Review Nickname"
        placeholder="Example: jackson11!"
        fullWidth
        name="nickname"
        inputRef={nicknameRef}
        inputProps={{
          maxLength: 60
        }}

      />
{nicknameRef && <p>Nickname*: For privacy reasons, do not use your full name or email address.</p>}
    </>);
}



export default FormNicknameInput;

