import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'

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
        multiline
        name='body'
        minRows={4}
        placeholder="Why did you like the product or not?"
        fullWidth
        inputProps={{
          maxLength: 1000,
          minLength: 50,
          "data-testid": "FormBodyInputTextField",
        }}
      onChange={(e) => { handleBodyChange(e) }}
      />

      <p className='bodyCount'>  {(bodyLength >= 0 ? `Minimum required characters left: ${bodyLength}` : 'Minimum reached.')}
      </p>
    </>);
}



export default FormBodyInput;