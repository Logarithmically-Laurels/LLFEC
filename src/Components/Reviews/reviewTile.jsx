import React, { useState, useEffect } from "react";
import axios from "axios";
import authtoken from '../../../config.js';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const ReviewTile = ({ review, product_id, sort, metaData }) => {
  const [reviewMetaData, setReviewMetaData] = useState(metaData);





  return (
    <div>
      <Grid container
        rowSpacing={1}
        columnSpacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="baseline"
      >
        <Grid item xs={12}>
          <Item>{review.review_id}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>


    </div>
  )
}

export default ReviewTile;