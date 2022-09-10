import React, { setState, useState, useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FormBodyInput from './FormComponents/formBodyInput.jsx';
import FormNicknameInput from './FormComponents/formNicknameInput.jsx'
import FormEmailInput from './FormComponents/formEmailInput.jsx';
import FormRatingInput from './FormComponents/formRatingInput.jsx';
import FormCharInput from './FormComponents/formCharInput.jsx';
import FormPhotoInput from './FormComponents/formPhotoInput.jsx';
import Stack from '@mui/material/Stack';

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: p.focusColor
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: p.focusColor
    }
  }
}));


const ReviewModalComponents = ({ product, metaData }) => {
  const [charArray, setCharArray] = useState(null);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    height: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    maxHeight: '70vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

  };

  return (
    <Item data-testid='reviewModalComponentsRoot'>
      <Box
        sx={{
          ...style,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `". Title Title ."
            "stars stars recommend recommend"
            "characteristic characteristic characteristic characteristic "
            "summary summary summary summary"
            "body body body body"
            "nickname nickname email email"
            "upload photos photos photos"
            "error error . submit"`,
        }}
        className='inputReviewModal'
      >
        <Box sx={{ gridArea: 'Title' }}>
          <div className='reviewModalTitle'>
            <h3 className='reviewModalH3'>Write Your Review</h3>
            <p className='reviewModalH5'>About the {product.name}</p>
          </div>
        </Box>
        <Box sx={{ gridArea: 'stars' }} className='alignRating'>
          <FormRatingInput />
        </Box>
        <Box sx={{ gridArea: 'recommend' }}>
          <Stack spacing={2} direction="row" container="true" padding="2%">
            <p className="recommendp"><b>Would you recommend this product?*</b></p>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-recommend"
              name="recommend"
            >
              <FormControlLabel value={true} control={<Radio required/>} label="Yes" />
              <FormControlLabel value={false} control={<Radio required/>} label="No" />
            </RadioGroup>
          </Stack>
        </Box>
        <Box sx={{ gridArea: 'characteristic' }}>
          <FormCharInput metaData={metaData} />
        </Box>
        <Box sx={{ gridArea: 'summary' }}>
          <CssTextField
            focusColor="black"
            variant="outlined"
            id="outlined-multiline-static"
            multiline
            name='summary'
            placeholder="Why did you like the product or not?"
            fullWidth
            inputProps={{
              maxLength: 60,
              "data-testid": 'reviewModalComponentsSummary',
            }}
          />
        </Box>
        <Box sx={{ gridArea: 'body' }}>
          <FormBodyInput />
        </Box>
        <FormPhotoInput />
        <Box sx={{ gridArea: 'nickname' }}>
          <FormNicknameInput />
        </Box>
        <Box sx={{ gridArea: 'email' }}>
          <FormEmailInput />
        </Box>
        <Box sx={{ gridArea: 'error' }}>

        </Box>
        <Box sx={{ gridArea: 'submit' }}>
          <Button variant="outlined" data-testid='modalSubmit'  style={{color: '#000000', borderColor: '#000000'}}
            type="submit"
          > Submit</Button>
        </Box>

      </Box>
    </Item>
  )
}

export default ReviewModalComponents;

