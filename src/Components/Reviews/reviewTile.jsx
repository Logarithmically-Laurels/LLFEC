import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stars from "./stars.jsx";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import Rating from '@mui/material/Rating';
import DoneIcon from '@mui/icons-material/Done';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: '8px',
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ReviewTile = ({ review, product_id, metaData }) => {
  const [reviewMetaData, setReviewMetaData] = useState(metaData);
  const [showSummary, setShowSummary] = useState(null)
  const [showBody, setShowBody] = useState(null)
  const [open, setOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [helpful, setHelpful] = useState(false);
  const [report, setReport] = useState(true);

  const handleOpen = (url) => {
    setOpen(true)
    setModalPhoto(url)
  };

  const handleClose = () => setOpen(false);

  const handleShowMore = (e, state) => {
    e.preventDefault()
    state === 'summary' ? setShowSummary(null) : setShowBody(null)
  }

  const handleHelpfulClick = (e) => {
    e.preventDefault()
    var options = {
      url: `/reviews/helpful`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        product_id: product_id,
      },
    }
    axios(options)
      .then((results) => {
        setHelpful(true)
      })
      .catch(err => {
        console.log(err)
      })

  }

  const handleReportClick = (e) => {
    e.preventDefault()
    var options = {
      url: `/reviews/report`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        product_id: product_id,
      },
    }
    axios(options)
      .then((results) => {
        setReport(false)
      })
      .catch(err => {
        console.log(err)
      })

  }


  useEffect(() => {
    if (review.summary && review.summary.length > 60) {
      setShowSummary(review.summary.slice(0, 60) + '...')
    }
    if (review.body && review.body.length > 250) {
      setShowBody(review.body.slice(0, 247) + '...')
    }
  }, [])


  return (
    <div data-testid='reviewTile'>
     {report && <Item>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"stars . . date"
        "summary summary summary summary"
        "recommend recommend recommend recommend"
        "body body body body"
        "response response response response"
        "helpful . . ."`,
          }}
        >
          <Box sx={{ gridArea: 'stars' }}>
            <Rating size="small" name="read-only" value={review.rating} precision={0.25} readOnly />
          </Box>
          <Box sx={{ gridArea: 'date' }} className='dateSize' data-testid='reviewTileDate'>
          {review.email && <CheckCircleOutlineIcon />}
            {review.reviewer_name} on {format(new Date(review.date), 'PPP')}

          </Box>
          <Box sx={{ gridArea: 'summary' }} className='summarySize'>
            {showSummary && <><b>{showSummary}</b>
              <br></br>
              <a onClick={(e) => { handleShowMore(e, 'summary') }} fontSize={12}>Show More</a></>}
            {!showSummary && <b>{review.summary}</b>}
          </Box>
          <Box sx={{ gridArea: 'recommend' }} className='recommend'>
            {review.recommend && <><DoneIcon fontSize="small" sx={{color: '#659DBD'}} /> I recommend this product</>}
          </Box>
          <Box sx={{ gridArea: 'body' }} className='body'>
            {showBody && <>{showBody}
              <br></br>
              <a onClick={(e) => { handleShowMore(e, 'body') }} className='showMore'>Show More</a></>}
            {!showBody && <>{review.body}</>}
            {review.photos.length > 0 && <ImageList sx={{ maxWidth: 600, height: 120 }} cols={5} rowHeight={120}>
              {review.photos.map((item) => (
                <ImageListItem key={item.id} onClick={() => handleOpen(item.url)}>
                  <img
                    className='thumbnail'
                    src={`${item.url}`}
                    alt={'reviewer photo'}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>}
            {open && <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  className='modalImage'
                  src={`${modalPhoto}`}
                  alt={'reviewer photo'}
                  loading="lazy"
                />
              </Box>
            </Modal>}
          </Box>
          <Box sx={{ gridArea: 'response' }} className='response'>
          {review.response && <><b>   Response from seller:</b> <br></br>   {review.response}</>}
          </Box>
          <Box sx={{ gridArea: 'helpful' }} fontSize={14}> Helpful?   <a onClick={(e) => { handleHelpfulClick(e) }} className='link'>  Yes (
            {!helpful && review.helpfulness}
            {helpful && parseInt(review.helpfulness)+1}
            )</a>  |  <a onClick={(e) => { handleReportClick(e) }} className='link'>   Report  </a>
            </Box>
        </Box>
      </Item>}
    </div >
  )
}

export default ReviewTile;