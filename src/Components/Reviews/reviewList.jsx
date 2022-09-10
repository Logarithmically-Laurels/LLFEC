import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewTile from './reviewTile.jsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import "./review.css";
import ReviewModal from './reviewModal.jsx';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({

}));

const CssSelect = styled(Select, {
  shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: '#000000 !important'
  },
  // focused color for input with variant='standard'
  "&.MuiInput-underline:after": {
    borderBottomColor: '#000000'
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: '#000000'
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000000',
  },


}));


const ReviewList = ({ currentProd, metaData, numReviews, starsToRender }) => {
  const [currentReviews, setCurrentReviews] = useState(null);
  const [reviewsInView, setReviewsInView] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(currentProd);
  const [metaDataState, setMetaDataState] = useState(metaData)
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(500);
  const [sort, setSort] = useState('relevant')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSortChange = (e) => {
    e.preventDefault();
    setSort(e.target.value);

  };

  const handleScroll = (e) => {
    e.preventDefault()
    if (e.target.scrollHeight - e.target.scrollTop < 800) {
      setReviewsInView(currentReviews.slice(0, reviewsInView.length + 2))
    }
  }


  useEffect(() => {
    window.sessionStorage.getItem('sort') ?
      setSort(window.sessionStorage.getItem('sort')) : 'relevant'
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem('sort', sort)
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
        var sortedReviews = results.data.results;

        var starCurrentReviews = []
        // if (!reviewsInView) {
          if (starsToRender.length > 0) {
            starsToRender.forEach(star => {
              sortedReviews.forEach(review => {
                if (review.rating === star) {
                  starCurrentReviews.push(review)
                }
              })
            })
            setCurrentReviews(starCurrentReviews)
            setReviewsInView(starCurrentReviews.slice(0, 4))
          } else {
            setCurrentReviews(sortedReviews);
            setReviewsInView(sortedReviews.slice(0, 4))
          }
        // }
        //  else {
        //   if (starsToRender.length > 0) {
        //     starsToRender.forEach(star => {
        //       sortedReviews.forEach(review => {
        //         if (review.rating === star) {
        //           starCurrentReviews.push(review)
        //         }
        //       })
        //     })
        //     setCurrentReviews(starCurrentReviews)
        //     setReviewsInView(starCurrentReviews.slice(0, 4))
        //   } else {
        //     setCurrentReviews(sortedReviews);
        //     setReviewsInView(sortedReviews.slice(0, reviewsInView.length + 2))
        //   }
        // }
      })
      .catch((err) => {
        console.log(err);
      });

  }, [sort, page, starsToRender]);




  return (
    <div data-testid="reviewListRoot">
      <Grid container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft="2%"
        paddingRight="2%"
      >
        <Grid
          justifyContent="flex-start" >
          <span data-testid='reviewListTotalReviews'><b >Total Reviews: {numReviews} </b></span>
        </Grid>
        <Grid
          justifyContent="flex-end" paddingTop="10px">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small" style={{ color: '#000000' }}>Sort by</InputLabel>
            <CssSelect

              labelId="demo-select-small"
              id="demo-select-small"
              value={sort}
              label="Sort on"
              variant="outlined"
              onChange={(e) => { handleSortChange(e) }}
              data-testid='reviewListSortSelector'
            >
              <MenuItem value={'relevant'}>Relevant</MenuItem>
              <MenuItem value={'newest'}>Newest</MenuItem>
              <MenuItem value={'helpful'}>Helpful</MenuItem>
            </CssSelect>
          </FormControl>
        </Grid>
      </Grid>
      <div className='ReviewScroll' data-testid='reviewListTiles' onScroll={(e)=>{handleScroll(e)}}>
        {(currentReviews && reviewsInView.length > 0) && <>
          {reviewsInView.map((review) => (
            <ReviewTile key={review.review_id} data-testid={review.review_id.toString()}
              review={review}
              metaData={metaData}
              sort={sort}
              product_id={currentProduct.id} />
          ))}
        </>}
      </div>
      <Stack spacing={2} direction="row" container="true" padding="2%">
        {(currentReviews && reviewsInView.length > 0) &&
          <Button variant="outlined" style={{ color: '#000000', borderColor: '#000000' }}
            onClick={(e) => { handleMoreReviews(e) }}> More Reviews</Button>}
        <Button variant="outlined"
          style={{ color: '#000000', borderColor: '#000000' }}
          endIcon={<AddIcon />}
          onClick={handleOpen}
          data-testid="reviewModalButton"

        >Add a Review </Button>
      </Stack>

      <Item>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="add-a-review"
          aria-describedby="modal-review-form"
          data-testid='reviewModal'
        >
          <div>
            <ReviewModal product={currentProduct} metaData={metaDataState} handleClose={handleClose} />
          </div>
        </Modal>
      </Item>
    </div>
  )
}

export default ReviewList;