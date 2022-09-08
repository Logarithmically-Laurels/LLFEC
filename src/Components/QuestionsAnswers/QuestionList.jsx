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
    <div>
    <div style={{ height: "80vh", overflow: "scroll"}}>
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
      <Grid container spacing={0} textAlign="center">
        <Grid xs={6}>
          <Button
            size="large"
            variant="text"
            onClick={showMoreQuestions}
            style={{ width: "700px", height: "70px", color: '#000000', borderColor: '#000000' }}
          >
            MORE QUESTIONS...
          </Button>
        </Grid>
        <Grid xs={6}>
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
