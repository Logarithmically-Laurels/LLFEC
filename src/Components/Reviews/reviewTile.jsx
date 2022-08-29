import React, { useState, useEffect } from "react";
import axios from "axios";
import authtoken from '../../../config.js';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stars from "./stars.jsx";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import Rating from '@mui/material/Rating';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: '8px',
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


const ReviewTile = ({ review, product_id, metaData }) => {
  const [reviewMetaData, setReviewMetaData] = useState(metaData);
  const [showSummary, setShowSummary] = useState(null)
  const [showBody, setShowBody] = useState(null)

  const handleShowMore = (e, state) => {
    e.preventDefault()
    // console.log('click')
    if (state === 'summary') {
      setShowSummary(null)
    } else {
      setShowBody(null)
    }
  }
  const handleHelpfulClick = (e) => {
    e.preventDefault()
    console.log('click helpful')
  }

  const handleReportClick = (e) => {
    e.preventDefault()
    console.log('click Report')
  }

  useEffect(() => {
    // console.log(review)
    if (review.summary && review.summary.length > 60) {
      setShowSummary(review.summary.slice(0, 60) + '...')
    }
    if (review.body && review.body.length > 250) {
      setShowBody(review.body.slice(0, 247) + '...')
    }
  }, [])


  return (
    <div>
      <Item>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"stars . . date"
        "summary summary summary summary"
        "body body body body"
        "response response response response"
        "helpful . . ."`,
          }}
        >
          <Box sx={{ gridArea: 'stars' }}>
            <Rating name="read-only" value={review.rating} precision={0.25} readOnly />
          </Box>
          <Box sx={{ gridArea: 'date' }} fontSize={15}>    {review.email && <CheckCircleOutlineIcon />}
            {review.reviewer_name} {format(new Date(review.date), 'PPP')}
          </Box>
          <Box sx={{ gridArea: 'summary' }}>
            {showSummary && <><b>{showSummary}</b>
              <br></br>
              <a onClick={(e) => { handleShowMore(e, 'summary') }} fontSize={12}>Show More</a></>}
            {!showSummary && <b>{review.summary}</b>}
          </Box>
          <Box sx={{ gridArea: 'body' }}>
            {showBody && <>{showBody}
              <br></br>
              <a onClick={(e) => { handleShowMore(e, 'body') }}>Show More</a></>}
            {!showBody && <>{review.body}</>}
          </Box>
          {review.response && <Box sx={{ gridArea: 'response' }}>
            <>Response from seller <br></br>{review.response}</>
          </Box>}
          <Box sx={{ gridArea: 'helpful'}} fontSize={12}> Helpful?  <a onClick={(e)=>{handleHelpfulClick(e)}}>  Yes ({review.helpfulness})  </a>  |  <a onClick={(e)=>{handleReportClick(e)}}>   Report  </a> </Box>
        </Box>

      </Item>
    </div >
  )
}

export default ReviewTile;