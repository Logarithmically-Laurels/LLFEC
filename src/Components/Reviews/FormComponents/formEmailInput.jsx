
import React, { useState } from "react";
import TextField from '@mui/material/TextField';

const FormEmailInput = () => {
const [emailDesc, setEmailDest] = useState(false)


  return (
    <>
      <TextField
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

