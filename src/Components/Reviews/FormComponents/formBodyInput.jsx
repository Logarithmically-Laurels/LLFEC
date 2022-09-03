import React, { useState } from "react";
import TextField from '@mui/material/TextField';

const FormBodyInput = () => {

  const [bodyLength, setBodyLength] = useState(50);

  const handleBodyChange = (e) => {
    e.preventDefault()
    var bodyString = e.target.value
    var currentBodyLength = 50 - bodyString.length
    setBodyLength(currentBodyLength)
  }

  return (
    <>
      <TextField
        required
        id="outlined-multiline-static"
        multiline
        name='body'
        minRows={4}
        placeholder="Why did you like the product or not?"
        fullWidth
        inputProps={{
          maxLength: 1000,
          minLength: 50,
        }}
        onChange={(e) => { handleBodyChange(e) }}
      />
      <p className='bodyCount'>  {(bodyLength >= 0 ? `Minimum required characters left: ${bodyLength}` : 'Minimum reached.')}
      </p>
    </>);
}



export default FormBodyInput;