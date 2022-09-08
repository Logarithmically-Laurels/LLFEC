import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewTile from './reviewTile.jsx';
import useAxiosGet from '../CommonComponents/axiosRequest.jsx'
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
import ReviewModal from './reviewModal.jsx';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',

  // padding: theme.spacing(1),
  // margin: '8px',
  // textAlign: 'left',
  // color: theme.palette.text.secondary,
}));


const ReviewList = ({ currentProd, metaData, numReviews, starsToRender }) => {
  const [currentReviews, setCurrentReviews] = useState(null);
  const [reviewsInView, setReviewsInView] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(currentProd);
  const [metaDataState, setMetaDataState] = useState(metaData)
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(50);
  const [sort, setSort] = useState('relevant')
  // const [sortStars, setSortStars] = useState(starsToRender)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  // console.log('reviewsinView ', reviewsInView)

  const handleSortChange = (e) => {
    e.preventDefault();
    setSort(e.target.value);

  };

  const handleMoreReviews = (e) => {
    e.preventDefault()
    if (reviewsInView.length < currentReviews.length) {
      setReviewsInView(currentReviews.slice(0, reviewsInView.length + 2))
    } else {
      setPage(page + 1)
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
        if (!reviewsInView) {
          if (starsToRender.length > 0) {
            starsToRender.forEach(star => {
              sortedReviews.forEach(review => {
                if (review.rating === star) {
                  starCurrentReviews.push(review)
                }
              })
            })
            setCurrentReviews(starCurrentReviews)
            setReviewsInView(starCurrentReviews.slice(0, 2))
          } else {
            setCurrentReviews(sortedReviews);
            setReviewsInView(sortedReviews.slice(0, 2))
          }
        } else {
          if (starsToRender.length > 0) {
            starsToRender.forEach(star => {
              sortedReviews.forEach(review => {
                if (review.rating === star) {
                  starCurrentReviews.push(review)
                }
              })
            })
            setCurrentReviews(starCurrentReviews)
            setReviewsInView(starCurrentReviews.slice(0, 2))
          } else {
            setCurrentReviews(sortedReviews);
            setReviewsInView(sortedReviews.slice(0, reviewsInView.length + 2))
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

  }, [sort, starsToRender]);




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
          justifyContent="flex-start">
          <span data-testid='reviewListTotalReviews'><b >Total Reviews: {numReviews} </b></span>
        </Grid>
        <Grid
          justifyContent="flex-end">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Sort by</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={sort}
              label="Sort on"
              onChange={(e) => { handleSortChange(e) }}
              data-testid='reviewListSortSelector'
            >
              <MenuItem value={'relevant'}>Relevant</MenuItem>
              <MenuItem value={'newest'}>Newest</MenuItem>
              <MenuItem value={'helpful'}>Helpful</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div className='ReviewScroll' data-testid='reviewListTiles'>
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
          <Button variant="outlined"  style={{color: '#000000', borderColor: '#000000'}}
            onClick={(e) => { handleMoreReviews(e) }}> More Reviews</Button>}
        <Button variant="outlined"
        style={{color: '#000000', borderColor: '#000000'}}
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