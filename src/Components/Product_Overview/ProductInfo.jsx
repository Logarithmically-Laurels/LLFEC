import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Stack } from "@mui/material";
import Stars from "../Reviews/stars.jsx";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";

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
  return (
    <Container
      disableGutters
      sx={{ border: 1, height: "33%", width: "100%", mb: "2%" }}
    >
      <Container disableGutters sx={{ width: "100%", display: "flex" }}>
        <Stars product_id={props.prodId} />
        <Link sx={{ color: "black" }}>{reviewText()}</Link>
      </Container>
      <Typography variant="body2">CATEGORY</Typography>
      <Typography variant="h5" sx={{ fontsize: 20 }}>
        {props.prodInfo.name}
      </Typography>
      <Typography sx={{ my: "5%" }}>{priceText()}</Typography>
      <Stack
        disableGutters
        direction="row"
        sx={{ width: "100%", height: "25%", mb: "2%" }}
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
