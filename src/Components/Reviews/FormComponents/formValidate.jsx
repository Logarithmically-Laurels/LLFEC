
import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const formValidate = ({ validate }) => {


  return (
    <>
      {validate && <Alert severity="error">
        <AlertTitle>Warning</AlertTitle>
        {validate}
      </Alert>}
    </>
  );

}


export default formValidate;

