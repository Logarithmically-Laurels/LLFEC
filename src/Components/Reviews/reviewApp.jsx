import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewNumber from "./reviewNumbers.jsx";
import ReviewList from "./reviewList.jsx";
import useAxiosGet from "../CommonComponents/axiosRequest.jsx";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


const ReviewApp = ({ currentProd }) => {
  const [currentProduct, setCurrentProduct] = useState(currentProd);
  const [currentReviews, setCurrentReviews] = useState(null);
  const [reviewMetaData, setReviewMetaData] = useState(null);
  // const [numReviews, setNumReviews] = useState(0);

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
    // var numReviews = parseInt(reviewMetaData.ratings[1]) + parseInt(reviewMetaData.ratings[2]) + parseInt(reviewMetaData.ratings[3]) + parseInt(reviewMetaData.ratings[4]) + parseInt(reviewMetaData.ratings[5]);
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
    <div>
      {currentProduct && (
        <Grid
          container
          spacing={0.5}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="stretch"
        >
          <Grid item xs={3}>
            <Item>
              <ReviewNumber
                product_id={currentProduct.id}
                metaData={reviewMetaData}
                numReviews={numReviews}
                style={{ height: "100%" }}
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
              />
            </Item>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ReviewApp;
