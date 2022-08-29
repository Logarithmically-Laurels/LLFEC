import axios from "axios";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Stars = ({ product_id }) => {
  const [rating, setRating] = React.useState(null);


  React.useEffect(() => {
    var options = {
      url: "/reviews/meta",
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        product_id: product_id,
      },
    }
    axios(options)
      .then((results) => {
        // console.log(results)
        var totalRating = 0;
        var totalReviews = 0;
        for (var key in results.data.ratings) {
          totalRating += parseInt(key) * parseInt(results.data.ratings[key])
          totalReviews += parseInt(results.data.ratings[key])
        }
        var avgRating = totalRating / totalReviews;
        // console.log(avgRating)
        setRating(avgRating)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {rating &&
        <Rating name="read-only" value={rating} precision={0.25} readOnly />}
    </Box>
  );
}


export default Stars;