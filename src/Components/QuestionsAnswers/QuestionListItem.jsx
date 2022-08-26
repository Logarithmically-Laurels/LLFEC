import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem } from "@mui/material";
import AnswerList from './AnswerList.jsx';

const QuestionListItem = ({question, answers, question_date, question_helpfulness}) => {
  let newTime = question_date.slice(0,10);

  return (
    <ListItem>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <strong>Q: {question}</strong>
        </Grid>
        <Grid item xs ={4}>
          Helpful? Yes ({question_helpfulness})
        </Grid>
        {/* <Grid item xs={12}>
          <AnswerList answers={answers}/>
        </Grid> */}
        <Grid item xs={12}>
          <i>Posted by: User on {newTime}</i>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default QuestionListItem;