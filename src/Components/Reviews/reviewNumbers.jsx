import React, { useState, useEffect } from "react";
import axios from "axios";
import Stars from './stars.jsx';
import { styled, Container } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import charKey from './reviewData.jsx';



const ReviewNumber = ({ product_id, numReviews, metaData, handleStarSort, starsToRender, clearStarFilter, clearFilterMsg }) => {
  const [prod_id, setProd_Id] = useState(product_id);
  const [background, setBackground] = useState(false);
  const [numbersStarsToRender, setNumbersStarsToRender] = useState(starsToRender)


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    height: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const StarSlider = styled(Slider)(({ theme }) => ({
    '& .MuiSlider-thumb': {
      height: 2,
      width: 2,
    },
    '& .MuiSlider-track': {
      width: '70%',
    }
  }))
  const CharSlider = styled(Slider)(({ theme }) => ({
    '& .MuiSlider-thumb': {
      width: 2,
      height: 16,
    },
    '& .MuiSlider-track': {
      width: '70%',
    }
  }))


//Calculate total and average review data
  var totalRating = 0;
  var totalReviews = 0;
  var ratings = [];
  for (var key in metaData.ratings) {
    totalRating += parseInt(key) * parseInt(metaData.ratings[key])
    totalReviews += parseInt(metaData.ratings[key])
  }
  var avgRating = totalRating / totalReviews;
  ratings.sort((a, b) => {
    return b - a;
  });
  var ratingPercentage = [];
  ['5', '4', '3', '2', '1'].forEach(starCount => {
    if (metaData.ratings[starCount]) {
      ratingPercentage.push(parseInt(metaData.ratings[starCount]) / totalReviews * 100)
    } else {
      ratingPercentage.push(0)
    }
  })

  //calculate % of users who recommend product
  var percentRecommend = Math.round((parseInt(metaData.recommended.true) / totalReviews) * 100 * 10) / 10

  //create array of characteristics and values
  const charArray = Object.entries(metaData.characteristics)

  var styleSelect = background ? 'colorChange' : '';

  return (
    <div>

      <Stack spacing={2} direction="row" container="true" padding="2%" justifyContent="center" alignItems="center">
        <span className="largeNumber"><b>{Math.round(avgRating * 10) / 10}</b></span>
        <Stack spacing={0} direction="column" container="true" paddingTop="8%">
          <Stars product_id={product_id} size='small' />
          <span> Total ratings: {totalReviews}</span>
        </Stack>
      </Stack>
      <div>
        <Stack spacing={0} direction="column" container="true" paddingTop="3%" width="100%">
          <span className='ratingTitle' data-testid='reviewNumbersTitle'>Rating Breakdown</span>
         {numbersStarsToRender.length>0 && <button className="starLabels" onClick={(e)=> {
            clearStarFilter(e)
          }}>Clear Filters</button>}
          <Stack spacing={0} direction="column" container="true" margin="2%" paddingTop="3%" width='100%' data-testid='reviewNumbersRatingStack'

          >
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" key={index}>
                <button className='starLabels underline' onClick={(e) => {
                  handleStarSort(e, rating)
                }}>
                  {numbersStarsToRender.indexOf(rating) > -1 ? <span ><b>{rating} Stars</b></span> : <span >{rating} Stars</span>}
                  </button>
                <StarSlider
                  value={ratingPercentage[index]}
                  min={0}
                  max={100}
                  step={1}
                  aria-label="star slider"
                  sx={{ color: '#000000', width: '65%', display: 'flex', alignItems: 'center' }} />
                <span className='starLabels'>{metaData.ratings[rating] ? metaData.ratings[rating] : 0}</span>
              </Stack>
            ))
            }

          </Stack>
          <span>{percentRecommend}% recommend this product.</span>
          <Stack spacing={0} direction="column" container="true" margin="2%" paddingTop="5%" width='100%'>
            {charArray.map(([characteristic, obj], index) => (
              <div key={index}>
                <span className='characteristicTitle'>{characteristic}</span>
                <CharSlider
                  value={Math.round(obj.value)}
                  min={1}
                  max={5}
                  step={1}
                  marks
                  sx={{ color: '#000000', width: '85%', display: 'flex', alignItems: 'center' }} />
                <div className='characteristicLabels'>
                  <span>{charKey[characteristic][1]}</span>
                  <span> {charKey[characteristic][5]}</span>
                </div>
              </div>
            ))}
          </Stack>
        </Stack>
      </div>
    </div>
  )
}

export default ReviewNumber;