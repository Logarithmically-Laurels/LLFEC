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
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ReviewModalComponents from './reviewModalComponents.jsx';


const ReviewModal = ({ product, metaData }) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,

  }));




  const [validate, setValidate] = useState(null);



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
    var charInts = {}
    for (var characteristic in metaData.characteristics) {
      charInts[metaData.characteristics[characteristic].id] = parseInt(e.target[characteristic].value)
    }
    // var errorString = 'Please perform the following actions:';
    // if (!!bodyRef.current.value || bodyRef.current.value.length < 50) {
    //   errorString += ' increase length of review body to 50 character minimum,'
    // }
    // if (!!emailRef.current.value || !isValidEmail(emailRef.current.value)) {
    //   errorString += ' change to valid email address,'
    // }
    // photos.forEach((photo, index) => {
    //   if (!isValidUrl(photo)) {
    //     errorString += ` photo number ${index + 1} is invalid,`
    //   }
    // })
    // charArray.forEach(([characteristic, obj]) => {
    //   if (!characteristics[obj.id]) {
    //     errorString += ` fill in ${characteristic} rating,`
    //   }
    // })
    // if (description || recommend === 'banana' || !!nicknameRef.current.value) {
    //   errorString += ' complete all required fields,'
    // }
    // if (errorString.length > 38) {
    //   errorString = errorString.slice(0, errorString.length - 1)
    //   errorString += '.'
    //   setValidate(errorString)
    //   // console.log('error message')
    // } else {
    var sendData = {
      product_id: product.id,
      rating:  e?.target?.rating?.value,
      summary: e?.target?.summary?.value,
      body: e?.target?.body?.value,
      recommend:  e?.target?.recommend?.value,
      name: e?.target?.nickname?.value,
      email: e?.target?.email?.value,
      // photos: photosString,
      characteristics: charInts,
    }
    console.log(sendData)
    //   var options = {
    //     url: "/reviews",
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     data: sendData
    //   };
    //   console.log(options)
    //   axios(options)
    //     .then((results) => {
    //       console.log('submitted')
    //       handleClose
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  }







  useEffect(() => {


  }, [])



  return (
    <div data-testid='modal'>

      <Item>
        <form onSubmit={(e)=>handleFormSubmit(e)}>
          <ReviewModalComponents
            product={product}
            metaData={metaData}
            />
        </form>
      </Item>
    </div >
  )
}

export default ReviewModal;

