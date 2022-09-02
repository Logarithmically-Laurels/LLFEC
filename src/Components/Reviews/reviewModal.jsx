import React, { setState, useState, useEffect, useRef } from "react";
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
import FormBodyInput from './formBodyInput.jsx';
import FormSummaryInput from './formSummaryInput.jsx';
import FormNicknameInput from './formNicknameInput.jsx';
import FormEmailInput from './formEmailInput.jsx';
import FormControl from '@mui/material/FormControl'
import charKey from './reviewData.jsx'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

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
  const summaryRef = useRef()
  const bodyRef = useRef();
  const [bodyLength, setBodyLength] = useState(50);
  const [recommend, setRecommend] = useState('banana');
  const nicknameRef = useRef();
  const emailRef = useRef();
  const [photos, setPhotos] = useState([]);
  const [photosString, setPhotosString] = useState([])
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [charArray, setCharArray] = useState(null);
  const [open, setOpen] = useState(false);
  const [validate, setValidate] = useState(null);
  const [description, setDescription] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
    if (!!bodyRef.current.value || bodyRef.current.value.length < 50) {
      errorString += ' increase length of review body to 50 character minimum,'
    }
    if (!!emailRef.current.value || !isValidEmail(emailRef.current.value)) {
      errorString += ' change to valid email address,'
    }
    photos.forEach((photo, index) => {
      if (!isValidUrl(photo)) {
        errorString += ` photo number ${index + 1} is invalid,`
      }
    })
    charArray.forEach(([characteristic, obj]) => {
      if (!characteristics[obj.id]) {
        errorString += ` fill in ${characteristic} rating,`
      }
    })
    if (description || recommend === 'banana' || !!nicknameRef.current.value) {
      errorString += ' complete all required fields,'
    }
    if (errorString.length > 38) {
      errorString = errorString.slice(0, errorString.length - 1)
      errorString += '.'
      setValidate(errorString)
      // console.log('error message')
    } else {
      // console.log('trying to send post request')
      var options = {
        url: "/reviews",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          product_id: product.id,
          rating: rating,
          summary: summaryRef.current.value,
          body: bodyRef.current.value,
          recommend: recommend,
          name: nicknameRef.current.value,
          email: emailRef.current.value,
          photos: photosString,
          characteristics: characteristics,
        },
      };
      console.log(options)
      axios(options)
        .then((results) => {
          console.log('submitted')
          handleClose
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }



  const handlePhotoUpload = (e) => {
    var photoArray = photos
    var photoArrayString = photosString;
    photoArray.push(e.target.value)
    photoArrayString.push(e.target.value.toString())
    setCurrentPhoto(e.target.value)
    setPhotos([...photoArray])
    setPhotosString([...photoArrayString])
  }

  const handlePhotoDelete = (index) => {
    var photoArray = photos;
    var photoArrayString = photosString;
    photoArray.splice(index, 1)
    photoArrayString.splice(index, 1)
    setPhotos([...photoArray])
    setPhotosString([...photoArrayString])
  }





  useEffect(() => {
    const charArray = Object.entries(metaData.characteristics);
    setCharArray(charArray)
    // console.log(charArray)


  }, [])

  const ratingKey = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  }

  return (
    <div data-testid='modal'>

      <Item>
        <form>
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
            "upload photos photos photos"
            "summary summary summary summary"
            "body body body body"
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
                    value={characteristics[obj.id.toString()]}
                    onChange={(e) => {
                      var key = [obj.id].toString();
                      setCharacteristics({
                        ...characteristics,
                        [key]: [e.target.value]
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
              <FormSummaryInput summaryRef={summaryRef} />
            </Box>
            <Box sx={{ gridArea: 'body' }}>
              <FormBodyInput bodyRef={bodyRef} />
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
              <FormNicknameInput nicknameRef={nicknameRef} />

            </Box>
            <Box sx={{ gridArea: 'email' }}>
              <FormEmailInput emailRef={emailRef} />


            </Box>
            {validate && <Box sx={{ gridArea: 'error' }}>
                <Alert severity="error">
                  <AlertTitle>Warning</AlertTitle>
                  {validate}
                </Alert>
            </Box>}
            <Box sx={{ gridArea: 'submit' }}>
              <Button variant="outlined"
                onClick={(e) => {
                  console.log('handle submit called ')
                  handleFormSubmit(e)
                }}> Submit</Button>
            </Box>

          </Box>
        </form>
      </Item>
    </div >
  )
}

export default ReviewModal;

