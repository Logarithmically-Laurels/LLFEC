import React, { useState, useEffect } from "react";
import axios from "axios";
import authtoken from '../../../config.js';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stars from "./stars.jsx";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


const ReviewTile = ({ review, product_id, metaData }) => {
  const [reviewMetaData, setReviewMetaData] = useState(metaData);
  const [showSummary, setShowSummary] = useState(null)
  const [showBody, setShowBody] = useState(null)

  const handleShowMore = (e, state) => {
    e.preventDefault()
    console.log('click')
    if (state === 'summary') {
      setShowSummary(null)
    } else {
      setShowBody(null)
    }
  }

  useEffect(() => {
    console.log(review)
    if (review.summary && review.summary.length > 60) {
      setShowSummary(review.summary.slice(0, 60) + '...')
    }
    if (review.body && review.body.length > 250) {
      setShowBody(review.body.slice(0, 247) + '...')
    }
  }, [])


  return (
    <div>
      <Grid container="true"
        rowSpacing={1}
        columnSpacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        margin="2%"
      >
        <Grid item xs={6}  >
          <Item><Stars rating={review.rating} setStar={false} /></Item>
        </Grid>
        <Grid item xs={6} >
          <Item>
            {review.email && <CheckCircleOutlineIcon />}
            {format(new Date(review.date), 'PPP')}
          </Item>
        </Grid>
        <Grid item xs={12}>
          {showSummary && <Item><b>{showSummary}</b>
            <br></br>
            <a onClick={(e)=>{handleShowMore(e, 'summary')}}>Show More</a></Item>}
          {!showSummary && <Item><b>{review.summary}</b></Item>}
        </Grid>
        <Grid item xs={12}>
          {showBody && <Item>{showBody}
            <br></br>
            <a onClick={(e)=>{handleShowMore(e, 'body')}}>Show More</a></Item>}
          {!showBody && <Item>{review.body}</Item>}
        </Grid>
        {review.response && <Grid item xs={12}>
          <Item>Response from seller <br></br>{review.response}</Item>
        </Grid>}
      </Grid>


    </div>
  )
}

export default ReviewTile;