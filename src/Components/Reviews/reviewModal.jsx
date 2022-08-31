import React, { setState, useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

const ReviewModal = ({ product, metaData }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    maxHeight: '70vh',
    bgcolor: 'background.paper',
    // bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

  };

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',

    // padding: theme.spacing(1),
    // margin: '8px',
    // textAlign: 'left',
    // color: theme.palette.text.secondary,
  }));

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formState, setFormState] = useState({
    description: 'none selected'
  });
  const [rating, setRating] = useState(5);
  const [charArray, setCharArray] = useState(null);


  const handleFormSubmit = (e) => {
    e.preventDefault()
   setFormState({

   })
  }
  const handleFormChange = (e) => {
    e.preventDefault()
    var newState = e.target.value;
    // console.log("🚀 ~ file: reviewModal.jsx ~ line 61 ~ handleFormChange ~ newState", newState)

    setFormState({
      ...formState,
      [e.target.name]: newState,
    });
  }

  const charKey = {
    Size: {
      "1": 'A size too small',
      "2": '1/2 a size too small',
      "3": 'Perfect',
      "4": '1/2 size too big',
      "5": 'A size too big'
    },
    Width: {
      "1": 'Too narrow',
      "2": 'Slightly narrow',
      "3": 'Perfect',
      "4": 'Slightly wide',
      "5": 'Too wide'
    },
    Comfort: {
      "1": 'Uncomfortable',
      "2": 'Slightly uncomfortable',
      "3": 'Ok',
      "4": 'Comfortable',
      "5": 'Perfect'
    },
    Quality: {
      "1": 'Poor',
      "2": 'Below Average',
      "3": 'What I expected',
      "4": 'Pretty great',
      "5": 'Perfect'
    },
    Length: {
      "1": 'Runs short',
      "2": 'Runs slightly short',
      "3": 'Perfect',
      "4": 'Runs slightly long',
      "5": 'Runs long'
    },
    Fit: {
      "1": 'Runs tight',
      "2": 'Runs slightly tight',
      "3": 'Perfect',
      "4": 'Runs slightly long',
      "5": 'Runs long'
    }
  }

  useEffect(() => {
    const charArray = Object.entries(metaData.characteristics);
    setCharArray(charArray)


  }, [])

  return (
    <div data-testid='modal'>
      <Item>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="add-a-review"
          aria-describedby="modal-review-form"
        >

          <Box
            sx={{
              ...style,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              gridTemplateRows: 'auto',
              gridTemplateAreas: `"Title Title Title Title"
              "stars stars recommend recommend"
              "characteristic characteristic characteristic characteristic "
               "summary summary summary summary"
                "body body body body"
               "upload photos photos photos"
               "nickname nickname email email"
               ". . . submit"`,
            }}
            className='inputReviewModal'
          >
            <Box sx={{ gridArea: 'Title' }}>
              <h3>Write Your Review</h3>
              <span>About the ${product.name}</span>
            </Box>
            <Box sx={{ gridArea: 'stars' }}>
              <span>Rating * </span>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Box>
            <Box sx={{ gridArea: 'recommend' }}>
              <span>Would you recommend this product? *</span>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-recommend"
                name="recommend"
                value={formState.recommend}
                onChange={(e) => { handleFormChange(e) }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
            <Box sx={{ gridArea: 'characteristic' }}>
              {charArray && charArray.map(([characteristic, obj], index) => (
                <div key={index}>
                  {formState.description && <span>Please evaluate the {characteristic}. {formState[characteristic] ? formState[characteristic] : formState.description}</span>}
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons"
                    name={characteristic}
                    value={formState[obj.id]}
                    onChange={(e) => {
                      handleFormChange(e)
                      setFormState({ ...formState, [obj.id]: [e.target.value], [characteristic]: charKey[characteristic][e.target.value] })
                      console.log([e.target.value])
                    }}
                  >
                    <FormControlLabel value="1" control={<Radio />} label={charKey[characteristic]['1']} labelPlacement="bottom" />
                    <FormControlLabel value="2" control={<Radio />} label="" labelPlacement="bottom" />
                    <FormControlLabel value="3" control={<Radio />} label="" labelPlacement="bottom" />
                    <FormControlLabel value="4" control={<Radio />} label="" labelPlacement="bottom" />
                    <FormControlLabel value="5" control={<Radio />} label={charKey[characteristic]['5']} labelPlacement="bottom" />
                  </RadioGroup>
                </div>
              ))}
            </Box>
            <Box sx={{ gridArea: 'summary' }}>
              <TextField
                required
                id="outlined-required"
                label="Review Summary "
                placeholder="Review Summary (60 character max)"
                fullWidth
                name="summary"
                defaultValue={formState.summary}
                onChange={(e) => { handleFormChange(e) }}
              />
            </Box>
            <Box sx={{ gridArea: 'body' }}>
              <TextField
                required
                id="outlined-multiline-static"
                label="Review Body *"
                multiline
                name='body'
                minRows={4}
                defaultValue={formState.body}
                placeholder="Must be at least 50 characters"
                fullWidth
                onChange={(e) => { handleFormChange(e) }}
              />
            </Box>
            <Box sx={{ gridArea: 'upload' }}>

            </Box>
            <Box sx={{ gridArea: 'photos' }}>

            </Box>
            <Box sx={{ gridArea: 'nickname' }}>

            </Box>
            <Box sx={{ gridArea: 'email' }}>

            </Box>
            <Box sx={{ gridArea: 'submit' }}>
              <Button variant="outlined"
                onClick={(e) => { handleFormSubmit(e) }}> Submit</Button>
            </Box>

          </Box>
        </Modal>
      </Item>
    </div >
  )
}

export default ReviewModal;

