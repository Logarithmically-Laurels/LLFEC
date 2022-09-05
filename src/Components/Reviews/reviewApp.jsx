import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewNumber from "./reviewNumbers.jsx";
import ReviewList from "./reviewList.jsx";
import useAxiosGet from "../CommonComponents/axiosRequest.jsx";
import { styled, Container } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./review.css";

const ReviewApp = ({ currentProd }) => {
  const [currentProduct, setCurrentProduct] = useState(currentProd);
  const [currentReviews, setCurrentReviews] = useState(null);
  const [reviewMetaData, setReviewMetaData] = useState(null);
  const [starsToRender, setStarsToRender] = useState([]);



  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    height: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  if (reviewMetaData) {
    var numReviews = 0;
    for (var rating in reviewMetaData.ratings) {
      numReviews += parseInt(reviewMetaData.ratings[rating]);
    }
  }
const clearStarFilter = (e) => {
  e.preventDefault()
  setStarsToRender([])
}
  const handleStarSort = (e, rating) => {
    e.preventDefault()
    var tempStars = starsToRender;
    if (starsToRender.indexOf(rating) === -1) {
      tempStars.push(rating)
    } else {
      var index = starsToRender.indexOf(rating)
      tempStars.splice(index,1)
    }
    var tempStarsCopy = tempStars.slice()
    setStarsToRender(tempStarsCopy)
  }


  useEffect(() => {
    var options = {
      url: "/reviews/meta",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        product_id: currentProduct.id,
      },
    };
    axios(options)
      .then((results) => {
        setReviewMetaData(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='reviewAppRoot' data-testid='reviewAppRoot'>
      {reviewMetaData && (
        <Grid
          container
          spacing={0.5}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="stretch"
        maxWidth='1500px'
        >
          <Grid item xs={3}>
            <Item>
              <ReviewNumber
                product_id={currentProduct.id}
                metaData={reviewMetaData}
                numReviews={numReviews}
                style={{ height: "100%" }}
                handleStarSort={handleStarSort}
                starsToRender={starsToRender}
                clearStarFilter={clearStarFilter}
              />
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <ReviewList
                numReviews={numReviews}
                currentProd={currentProduct}
                metaData={reviewMetaData}
                style={{ height: "100%" }}
                starsToRender={starsToRender}
              />
            </Item>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ReviewApp;
