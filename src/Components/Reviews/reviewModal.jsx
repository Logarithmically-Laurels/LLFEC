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


const ReviewModal = ({ product, metaData, handleClose, handleValidate, validate }) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,

  }));


  const handleFormSubmit = (e) => {
    var photoArray = e?.target?.photos?.value.split(',');
    var charInts = {}
    for (var characteristic in metaData.characteristics) {
      charInts[metaData.characteristics[characteristic].id] = parseInt(e.target[characteristic]?.value)
    }

      handleClose()
      let sendData = {
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



  return (
    <div data-testid='reviewModalRoot'>

      <Item>

        <Box component="form"
        onSubmit={(e) => {
          e.preventDefault()
          handleFormSubmit(e)
        }}>

          <ReviewModalComponents
            product={product}
            metaData={metaData}
          />

        </Box>
      </Item>

    </div >
  )
}

export default ReviewModal;

