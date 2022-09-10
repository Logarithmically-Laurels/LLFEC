import React, { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import charKey from '../reviewData.jsx'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const FormCharInput = ({ metaData }) => {
  const [charDescription, setCharDescription] = useState({ initial: ' None selected' })
  const [charArray, setCharArray] = useState(null)


  useEffect(() => {
    const charArray = Object.entries(metaData.characteristics);
    setCharArray(charArray)
  }, [])

  return (
    <>
      {charArray && charArray.map(([characteristic, obj], index) => (
        <Stack spacing={2} direction="row" container="true" padding="2%" key={index}>
          {charDescription &&
            <div className='bodyCountDesc'>
              <p className='recommendp'><b>Please evaluate the {characteristic}*. </b></p>
              <p className='bodyCount char'> {charDescription[characteristic] ? charDescription[characteristic] : charDescription.initial} </p>
            </div>}
          <RadioGroup
            required
            row
            name={characteristic}
            onClick={(e) => setCharDescription({
              ...charDescription,
              [characteristic]: charKey[characteristic][e.target.value]
            })}
          >
            <FormControlLabel value={1} control={<Radio required/>} label={charKey[characteristic][1]} labelPlacement="bottom" size="small" />
            <FormControlLabel value={2} control={<Radio required/>} label="" labelPlacement="bottom" />
            <FormControlLabel value={3} control={<Radio required/>} label="" labelPlacement="bottom" />
            <FormControlLabel value={4} control={<Radio required/>} label="" labelPlacement="bottom" />
            <FormControlLabel value={5} control={<Radio required/>} label={charKey[characteristic][5]} labelPlacement="bottom" size="small" />
          </RadioGroup>
        </Stack>
      ))}
    </>

  );
}



export default FormCharInput;

