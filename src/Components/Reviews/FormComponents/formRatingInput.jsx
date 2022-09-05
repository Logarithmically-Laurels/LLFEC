import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import { styled, Container } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';

const FormRatingInput = () => {
const [description, setDescription] = useState(false)
const [rating, setRating] = useState(5)


const ratingKey = {
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great',
}
  return (


     <Stack spacing={2} direction="row" container="true" padding="2%">
        <p className='recommendp rating'><b>Rating* </b></p>
      <Rating
      required
          name="rating"
          value={rating}
          onChange={(event, newValue)=> {
            setDescription(true)
            setRating(newValue)
          }}
        />
        {description && <p className='bodyCountbottom' >{ratingKey[rating]} </p>}
      </Stack>

    );
}



export default FormRatingInput;

