import axios from "axios";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

 const Stars = ({ rating, setStars }) => {
  const [value, setValue] = React.useState(5);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {setStars && <>
        <Typography component="legend">Your Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /> </>}
      {!setStars && <Rating name="read-only" value={rating} readOnly />}
    </Box>
  );
}


export default Stars;