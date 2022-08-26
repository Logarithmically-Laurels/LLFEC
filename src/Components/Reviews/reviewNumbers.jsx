import React, { useState, useEffect } from "react";
import axios from "axios";
import Stars from './stars.jsx';

const ReviewNumber = ({product_id, numReviews}) => {
  const [metaData, setMetaData] = useState(null);
  const [prod_id, setProd_Id] = useState(product_id);

  //TODO: Axios request for metadata

  return (
    <div>
      {/* <Stars rating={metaData.ratings}/> */}
      <span> numbers and stars</span>
    </div>
  )
}

export default ReviewNumber;