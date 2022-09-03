import React, { useState } from "react";
import TextField from '@mui/material/TextField';

const FormNicknameInput = () => {
const [nicknameDesc, setNicknameDesc] = useState(false)


  return (
    <>
      <TextField
        required
        id="outlined-required"
        // label="Review Nickname"
        placeholder="Example: jackson11!"
        fullWidth
        name="nickname"

        inputProps={{
          maxLength: 60
        }}
        onChange={()=> {
          setNicknameDesc(true)
        }}
      />
{nicknameDesc && <p className='bodyCount'>Nickname*: For privacy reasons, do not use your full name or email address.</p>}
    </>);
}



export default FormNicknameInput;

