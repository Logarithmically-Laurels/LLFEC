import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Stack, Box } from "@mui/material";
import Stars from "../Reviews/stars.jsx";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import Scroll from "react-scroll";
const Link = Scroll.Link;

const ProductInfo = (props) => {
  const [numbOfReviews, setNumbOfReviews] = useState(0);

  useEffect(() => {
    var options = {
      url: "/reviews",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        product_id: props.prodId,
        count: 1000,
      },
    };
    axios(options).then((results) => {
      setNumbOfReviews(results.data.results.length);
    });
  }, [numbOfReviews]);

  var reviewText = () => {
    if (numbOfReviews > 0) {
      return `Read all ${numbOfReviews} reviews`;
    } else {
      return;
    }
  };
  var priceText = () => {
    if (props.prodInfo.sale_price !== null) {
      return (
        <Container disableGutters sx={{ display: "flex" }}>
          <Typography sx={{ mr: "4%", textDecoration: "line-through" }}>
            ${props.prodInfo.original_price}
          </Typography>
          <Typography sx={{ color: "red" }}>
            ${props.prodInfo.sale_price}
          </Typography>
        </Container>
      );
    } else {
      return <Typography>${props.prodInfo.original_price}</Typography>;
    }
  };

  //TODO center read all reviews
  //create hover animation for link (underline)
  return (
    <Container disableGutters sx={{ height: "33%", width: "100%" }}>
      <Container disableGutters sx={{ width: "100%", display: "flex" }}>
        <Stars sx={{ height: "15%" }} product_id={props.prodId} />
        <Link
          activeClass="active"
          to="reviews"
          smooth={true}
          offset={50}
          duration={500}
        >
          <Box
            sx={{
              textDecoration: "underline",
            }}
          >
            {reviewText()}
          </Box>
        </Link>
      </Container>
      <Typography variant="body2">{props.prodCat}</Typography>
      <Typography variant="h5" sx={{ fontsize: 20 }}>
        {props.prodInfo.name}
      </Typography>
      <Typography>{priceText()}</Typography>
      <Stack
        disableGutters
        direction="row"
        sx={{ width: "100%", height: "25%" }}
      >
        <IconButton sx={{ pl: 0 }}>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default ProductInfo;
