import React, { setState, useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // backgroundColor: 'black',
    // padding: theme.spacing(1),
    // margin: '8px',
    // textAlign: 'left',
    // color: theme.palette.text.secondary,
  }));


  const [formState, setFormState] = useState({
    description: ' None selected.'
  })
  const [rating, setRating] = useState(5);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('')
  const [bodyLength, setBodyLength] = useState(50);
  const [recommend, setRecommend] = useState('banana');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [charArray, setCharArray] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [validate, setValidate] = useState(null);
  const [description, setDescription] = useState(false);


  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }
  const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
  }


  const handleFormSubmit = (e) => {
    e.preventDefault()
    var errorString = 'Please perform the following actions:';
    if (body.length < 50) {
      errorString += ' increase length of review body to 50 character minimum,'
    }
    if (!isValidEmail(email)) {
      errorString += ' change to valid email address,'
    }
    photos.forEach((photo, index) => {
      if (!isValidUrl(photo)) {
        errorString += ` photo number ${index + 1} is invalid,`
      }
    })
    charArray.forEach(([characteristic, obj]) => {
      if (!!characteristics[obj.id]) {
        errorString += ` fill in ${characteristic} rating,`
      }
    })
    if (!!rating || recommend === 'banana' || !!nickname) {
      errorString += ' complete all required fields,'
    }
    if (errorString.length > 37) {
      errorString = errorString.slice(0, errorString.length - 1)
      errorString += '.'
      setValidate(errorString)
    } else {
      var options = {
        url: "/reviews",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          product_id: product.id,
          rating: rating,
          summary: summary,
          body: body,
          recommend: recommend,
          name: nickname,
          email: email,
          photos: photos,
          characteristics: characteristics,
        },
      };
      console.log(options)
      axios(options)
        .then((results) => {
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }



  const handlePhotoUpload = (e) => {
    e.preventDefault()
    var photoArray = photos
    photoArray.push(e.target.value)
    setCurrentPhoto(e.target.value)
    setPhotos(photoArray)
  }

  const handlePhotoDelete = (index) => {
    var photoArray = photos;
    photoArray.splice(index, 1)
    setPhotos(photoArray)
  }

  const handleBodyChange = (e) => {
    e.preventDefault()
    var bodyString = e.target.value
    var currentBodyLength = 50 - bodyString.length
    setBody(e.target.value)
    setBodyLength(currentBodyLength)
  }

  const charKey = {
    Size: {
      1: 'A size too small',
      2: '1/2 a size too small',
      3: 'Perfect',
      4: '1/2 size too big',
      5: 'A size too big'
    },
    Width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide'
    },
    Comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect'
    },
    Quality: {
      1: 'Poor',
      2: 'Below Average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect'
    },
    Length: {
      1: 'Runs short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    Fit: {
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    }
  }

  const ratingKey = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  }

  useEffect(() => {
    const charArray = Object.entries(metaData.characteristics);
    setCharArray(charArray)
    console.log(charArray)


  }, [])

  return (
    <div data-testid='modal'>

      <Item>
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
               "error error . submit"`,
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
                setDescription(true);
              }}
            />
            {description && <p>{ratingKey[rating]} </p>}
          </Box>
          <Box sx={{ gridArea: 'recommend' }}>
            <span>Would you recommend this product? *</span>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-recommend"
              name="recommend"
              value={recommend}
              onChange={(e) => {
                e.preventDefault();
                setRecommend(e.target.value)
              }}
            >
              <FormControlLabel value={true} control={<Radio />} label="Yes" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
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
                  value={characteristics[obj.id]}
                  onChange={(e) => {
                    console.log(obj.id)
                    setCharacteristics({
                      ...characteristics,
                      [obj.id]: [e.target.value]
                    })
                    setFormState({
                      ...formState,
                      [characteristic]: charKey[characteristic][e.target.value]
                    })

                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label={charKey[characteristic][1]} labelPlacement="bottom" />
                  <FormControlLabel value={2} control={<Radio />} label="" labelPlacement="bottom" />
                  <FormControlLabel value={3} control={<Radio />} label="" labelPlacement="bottom" />
                  <FormControlLabel value={4} control={<Radio />} label="" labelPlacement="bottom" />
                  <FormControlLabel value={5} control={<Radio />} label={charKey[characteristic][5]} labelPlacement="bottom" />
                </RadioGroup>
              </div>
            ))}
          </Box>
          <Box sx={{ gridArea: 'summary' }}>
            <TextField
              required
              id="outlined-required"
              // label="Summary"
              placeholder="Example: Best purchase ever!"
              fullWidth
              name="summary"
              value={summary}
              inputProps={{
                maxLength: 60
              }}
              onChange={(e) => {

                setSummary(e.target.value)
              }}
            />
          </Box>
          <Box sx={{ gridArea: 'body' }}>
            <TextField
              required
              id="outlined-multiline-static"
              multiline
              name='body'
              minRows={4}
              value={body}
              placeholder="Why did you like the product or not?"
              fullWidth
              inputProps={{
                maxLength: 1000
              }}
              onChange={(e) => { handleBodyChange(e) }}
            />
            <p>  {(bodyLength >= 0 ? `Minimum required characters left: ${bodyLength}` : 'Minimum reached.')}
            </p>
          </Box>
          <Box sx={{ gridArea: 'upload' }}>
            {photos.length < 5 && <Button variant="outlined" component="span" onClick={() => {
              handleOpen()
              setCurrentPhoto('')
            }}>
              Upload a Photo
            </Button>}
            <Item>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add-a-photo"
                aria-describedby="modal-photo-form"
              >
                <Box
                  sx={{
                    ...style,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: 1,
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: `"Text Text Text Text Button"
               "photo photo photo photo photo"`,
                  }} >
                  <Box sx={{ gridArea: 'Text' }}>
                    <TextField
                      required
                      id="outlined-required"

                      placeholder="Insert photo url here"
                      fullWidth
                      name="currentPhoto"
                      value={currentPhoto}

                      onChange={(e) => { handlePhotoUpload(e) }}
                    />
                  </Box>
                  <Box sx={{ gridArea: 'Button' }}>
                    <Button variant="outlined" component="span" onClick={handleClose}>
                      Submit Photo
                    </Button>
                  </Box>
                  <Box sx={{ gridArea: 'photo' }}>
                    {photos.length > 0 &&
                      photos.map((photo, index) => (
                        <img src={photo} alt="reviewer photo" className='thumbnailModal' key={index} onClick={(index) => { handlePhotoDelete(index) }}></img>
                      ))
                    }
                  </Box>
                </Box>
              </Modal>
            </Item>
          </Box>
          <Box sx={{ gridArea: 'photos' }}>
            {photos.length > 0 &&
              photos.map((photo, index) => (
                <img src={photo} alt="reviewer photo" className='thumbnailModal' key={index} onClick={(index) => { handlePhotoDelete(index) }}></img>
              ))
            }
          </Box>
          <Box sx={{ gridArea: 'nickname' }}>
            <TextField
              required
              id="outlined-required"
              // label="Review Nickname"
              placeholder="Example: jackson11!"
              fullWidth
              name="nickname"
              value={nickname}
              inputProps={{
                maxLength: 60
              }}
              onChange={(e) => {
                e.preventDefault();
                setNickname(e.target.value)
              }}
            />
            {nickname && <p>For privacy reasons, do not use your full name or email address.</p>}
          </Box>
          <Box sx={{ gridArea: 'email' }}>
            <TextField
              required
              id="outlined-required"
              placeholder="Email"
              fullWidth
              name="email"
              value={email}
              inputProps={{
                maxLength: 60
              }}
              onChange={(e) => {
                e.preventDefault();
                setEmail(e)
              }}
            />
            {email && <p>For authentication reasons, you will not be emailed.</p>}

          </Box>
          {validate && <Box sx={{ gridArea: 'error' }}>
            <p>{validate}</p>
          </Box>}
          <Box sx={{ gridArea: 'submit' }}>
            <Button variant="outlined"
              onClick={(e) => { handleFormSubmit(e) }}> Submit</Button>
          </Box>

        </Box>
      </Item>
    </div >
  )
}

export default ReviewModal;

