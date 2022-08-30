import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, Typography, Paper } from "@mui/material";
import AnswerList from './AnswerList.jsx';

const QuestionListItem = ({question, answers, question_date, question_helpfulness, onYes, question_id}) => {
  let newTime = question_date.slice(0,10);

  const onYesAnswer = (e) => {
    let id = e.target.id;

    const updateState = () => {
      const newState = questions.map(question => {if (parseInt(id) === parseInt(question.question_id)) {
        return {...question, question_helpfulness: question.question_helpfulness - 1}
      }
      return question
    })
    setQuestions(newState)
    e.target.isClicked = true;
    }

    const updateAnotherState = () => {
      const newState = questions.map(question => {if (parseInt(id) === parseInt(question.question_id)) {
        return {...question, question_helpfulness: question.question_helpfulness + 1}
      }
      return question
    })
    setQuestions(newState)
    e.target.isClicked = false;
    }

    if (e.target.isClicked === false) {
      updateState();
    } else {
      updateAnotherState();
    }
  }

  return (
    <ListItem>
      <Paper>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography><strong>Q: {question}</strong></Typography>
        </Grid>
        <Grid item xs ={4}>
          <div id={question_id} isClicked={false} onClick={onYes}>Helpful?  Yes({question_helpfulness})</div>
        </Grid>
        <Grid item xs={12}>
          <AnswerList answers={answers}/>
        </Grid>
        <Grid item xs={12}>
          <i>Posted by User on {newTime}</i>
        </Grid>
      </Grid>
      </Paper>
    </ListItem>
  )
}

export default QuestionListItem;