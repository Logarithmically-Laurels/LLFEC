
import React, {useState, useEffect} from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const FormValidate = ({ validate }) => {

  const [validateMsg, setValidateMsg] = useState(validate)

  useEffect(()=> {
    console.log(validate)
    setValidateMsg(validate)
    console.log('formValidate updating validate')
  }, [validate])

  return (
    <>

       {validateMsg.length>0 && <Alert severity="error">
        <AlertTitle>Warning</AlertTitle>
        {validateMsg}
      </Alert>}
    </>
  );

}


export default FormValidate;

