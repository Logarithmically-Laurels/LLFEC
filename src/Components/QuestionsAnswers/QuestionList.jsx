import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, List } from "@mui/material";
import QuestionListItem from './QuestionListItem.jsx'

const QuestionList = ({questions}) => {
  return (
    <List>
      {questions.map((question) => <QuestionListItem question={question.question_body} question_date={question.question_date} question_helpfulness={question.question_helpfulness} question_id={question.question_id} reported={question.reported} answers={question.answers}/>)}
    </List>
  )
}

export default QuestionList;