import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewTile from './reviewTile.jsx';
import useAxiosGet from '../CommonComponents/axiosRequest.jsx'
import authtoken from './../../../config.js'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import "./review.css";





const ReviewList = ({ currentProd, metaData, numReviews }) => {
  const [currentReviews, setCurrentReviews] = useState(null);
  const [reviewsInView, setReviewsInView] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(currentProd);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [sort, setSort] = useState('relevant')



  const handleSortChange = (e) => {
    e.preventDefault();
    setSort(e.target.value);
  };

  const handleMoreReviews = (e) => {
    e.preventDefault()
    if (reviewsInView.length < currentReviews.length - 2) {
      setReviewsInView(currentReviews.slice(0, reviewsInView.length + 2))
    } else {
      setPage(page + 1)
    }
  }

  const handleAddReviews = (e) => {
    e.preventDefault()
    console.log('add reviews')
  }

  //TODO Axios request for current Reviews
  useEffect(() => {
    var options = {
      url: "/reviews",
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        page: page,
        count: count,
        sort: sort,
        product_id: currentProduct.id,
      },
    }
    axios(options)
      .then((results) => {
        console.log(results)
        setCurrentReviews(results.data.results);
        if (!reviewsInView) {
          setReviewsInView(results.data.results.slice(0, 2))
        } else {
          setReviewsInView(reviewsInView.slice(-2).concat(results.data.results.slice(0, 2)))
        }
      })
      .catch((err) => {
        console.log(err);
      });

  }, [page, sort]);




  return (
    <div>
      <Grid container="true"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="2%">
        <Grid
        justifyContent="flex-start">
          <span><b>Total Reviews: {numReviews} </b></span>
        </Grid>
        <Grid
        justifyContent="flex-end">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Sort by</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={sort}
              label="Sort by"
              onChange={(e) => { handleSortChange(e) }}
            >
              <MenuItem value={'relevant'}>Relevant</MenuItem>
              <MenuItem value={'newest'}>Newest</MenuItem>
              <MenuItem value={'helpful'}>Helpful</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div className='ReviewScroll'>
      {currentReviews && <>
        {reviewsInView.map((review) => (
          <ReviewTile key={review.review_id}
            review={review}
            metaData={metaData}
            sort={sort}
            product_id={currentProduct.id} />
        ))}
      </>}
      </div>
      <Stack spacing={2} direction="row" container="true" padding="2%">
        <Button variant="outlined"
          onClick={(e) => { handleMoreReviews(e) }}> More Reviews</Button>
        <Button variant="outlined"
          endIcon={<AddIcon />}
          onClick={(e) => { handleAddReviews(e) }}>Add a Review </Button>
      </Stack>
    </div>
  )
}

export default ReviewList;