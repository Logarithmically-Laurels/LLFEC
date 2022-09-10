import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, List, Box } from "@mui/material";
import QuestionListItem from "./QuestionListItem.jsx";
import QuestionModal from "./QuestionModal.jsx";

const QuestionList = ({
  questions,
  onYes,
  showMoreQuestions,
  renderedQuestions,
  onReport,
  onQuestionChange,
  onAddQuestion,
  onEmailChange,
  onUserChange,
  product_id,
}) => {
  // console.log(renderedQuestions)
  return (
    <div id="questionList">
    <div style={{ maxHeight: "80vh", overflow: "auto", display: 'flex', flexDirection: 'column-reverse'}}>
      <List>
        {renderedQuestions.map((question) => (
          <QuestionListItem
            question={question.question_body}
            question_date={question.question_date}
            question_helpfulness={question.question_helpfulness}
            question_id={question.question_id}
            reported={question.reported}
            answers={question.answers}
            onYes={onYes}
            asker_name={question.asker_name}
            onReport={onReport}
          />
        ))}
      </List>
    </div>
    <div>
      <Grid container spacing={0}>
        <Grid xs={3}>
          <Button
            size="large"
            variant="outlined"
            onClick={showMoreQuestions}
            style={{ width: "300px", height: "45px", color: '#000000', borderColor: '#000000' }}
          >
            SHOW MORE QUESTIONS...
          </Button>
        </Grid>
        <Grid xs={1}>
          <QuestionModal
            onAddQuestion={onAddQuestion}
            onQuestionChange={onQuestionChange}
            onUserChange={onUserChange}
            onEmailChange={onEmailChange}
            product_id={product_id}
          />
        </Grid>
      </Grid>
    </div>
  </div>
  );
};

export default QuestionList;
