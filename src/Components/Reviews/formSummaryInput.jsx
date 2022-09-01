import React, { useState } from "react";
import TextField from '@mui/material/TextField';

const FormSummaryInput = ({summaryRef}) => {



  return (
    <>
      <TextField
        required
        id="outlined-multiline-static"
        multiline
        name='summary'
        inputRef={summaryRef}
        placeholder="Why did you like the product or not?"
        fullWidth
        inputProps={{
          maxLength: 60
        }}

      />

    </>);
}



export default FormSummaryInput;

