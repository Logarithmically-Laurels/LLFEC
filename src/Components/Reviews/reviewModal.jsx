import React, { setState, useState, useEffect, useRef } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ReviewModalComponents from './reviewModalComponents.jsx';


const ReviewModal = ({ product, metaData, handleClose }) => {

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
    if (e?.target?.body?.value && e?.target?.nickname?.value && e?.target?.recommend?.value && e?.target?.email?.value) {
      var options = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios.post("/reviews", [sendData], options)
        .then((results) => {
          console.log('submitted')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }



  return (
    <div data-testid='reviewModalRoot'>
      <Item>
        <Box component="form"
          onSubmit={(e) => {
            e.preventDefault()
            if (e?.target?.body?.value && e?.target?.email?.value) {
              handleFormSubmit(e)
            }
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

