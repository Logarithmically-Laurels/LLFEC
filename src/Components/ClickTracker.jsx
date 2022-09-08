import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClickTracker = ({ widget, render }) => {

  const onClickHandler = (e) => {
    let data = {
      element: e.target.innerHTML.toString(),
      widget: widget,
      time: new Date()
    };

    axios.post('/interactions', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    document.getElementById(widget).addEventListener('click', onClickHandler);
  }, [])

  return (
    <div>
      {render(onClickHandler)}
    </div>
  )
}

export default ClickTracker;