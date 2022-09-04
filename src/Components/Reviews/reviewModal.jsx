import React, { setState, useState, useEffect, useRef } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ReviewModalComponents from './reviewModalComponents.jsx';


const ReviewModal = ({ product, metaData, handleClose }) => {
  // const [validate, setValidate] = useState(null);
  var validate = null;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,

  }));


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
    var photoArray = e?.target?.photos?.value.split(',');
    var charInts = {}
    for (var characteristic in metaData.characteristics) {
      charInts[metaData.characteristics[characteristic].id] = parseInt(e.target[characteristic]?.value)
    }

    var sendData = {
      product_id: product.id,
      rating: e?.target?.rating?.value,
      summary: e?.target?.summary?.value,
      body: e?.target?.body?.value,
      recommend: e?.target?.recommend?.value,
      name: e?.target?.nickname?.value,
      email: e?.target?.email?.value,
      photos: photoArray,
      characteristics: charInts,
    }
    var errorString = 'Please perform the following actions:';

    if (!isValidEmail(e.target.email.value)) {
      errorString += ' change to valid email address,'
    }
    (photoArray).forEach((photo, index) => {
      if (photo !== '' && !isValidUrl(photo)) {
        errorString += ` photo number ${index + 1} is invalid,`
      }
    })
    for (var characteristic in metaData.characteristics) {
      if (isNaN(charInts[metaData.characteristics[characteristic].id])) {
        errorString += ` fill in ${characteristic} rating,`
      }
    }

    if ((e.target.recommend.value !== "true" && e.target.recommend.value !== "false")) {
      errorString += ' choose if you recommend the product,'
    }

    if (errorString.length > 38) {
      console.log('error string', errorString)
      var newErrorString = errorString.slice(0, errorString.length - 1)
      newErrorString += '.'
      validate = newErrorString;
      // setValidate(errorString)
      // console.log('error message')
    } else {
      console.log('send axios')
      handleClose()
      sendData = {
        product_id: product.id,
        rating: e?.target?.rating?.value,
        summary: e?.target?.summary?.value,
        body: e?.target?.body?.value,
        recommend: e?.target?.recommend?.value,
        name: e?.target?.nickname?.value,
        email: e?.target?.email?.value,
        photos: photoArray,
        characteristics: charInts,
      }
      console.log(sendData)
      var options = {
        url: "/reviews",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: [sendData]
      };

      axios(options)
        .then((results) => {
          console.log('submitted')

        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(()=> {
    console.log(validate)
    if (validate) {
      var newString = validate.slice()
      validate = newString;
    }
  }, [validate])


  return (
    <div data-testid='modal'>

      <Item>

        <form onSubmit={(e) => {
          e.preventDefault()
          handleFormSubmit(e)
        }}>
          {validate ?
          <ReviewModalComponents
            product={product}
            metaData={metaData}
            validate={validate}
          /> : <ReviewModalComponents
          product={product}
          metaData={metaData}
          validate={'original warning'}
        />
          }
        </form>
      </Item>

    </div >
  )
}

export default ReviewModal;

