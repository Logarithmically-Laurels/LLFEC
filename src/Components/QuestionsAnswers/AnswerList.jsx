import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, List, Typography, Paper } from "@mui/material";
import AnswerListItem from './AnswerListItem.jsx';
import AddAnswer from './AddAnswer.jsx';
import AnswerModal from "./AnswerModal.jsx";

const AnswerList = ({answers, id, onChangeNewAnswer, onChangeNewEmail, onChangeNewUsername, onClickAddAnswer, addAnswer, onAnswerSubmit, onClickShowMoreAnswers, onClickHideMoreAnswers, onYesAnswer, onAnswerReport, allAnswers}) => {

if (allAnswers.length > answers.length) {
    return (
      <div>
        <List>
          {Object.entries(answers).map((answer) => <AnswerListItem name={answer[1].answerer_name} body={answer[1].body} date={answer[1].date} helpfulness={answer[1].helpfulness} id={answer[1].answer_id} onYesAnswer={onYesAnswer} onAnswerReport={onAnswerReport}/>)}
        </List>
        <Grid container spacing={0} textAlign="center">
          <Grid xs={2}>
            <Button size="small" variant="text" onClick={onClickShowMoreAnswers} sx={{color:"#5A5A5A"}}>
              Load more answers...
            </Button>
          </Grid>
          {/* <Grid xs={2}>
            <AnswerModal onAnswerSubmit={onAnswerSubmit} onChangeNewAnswer={onChangeNewAnswer} onChangeNewEmail={onChangeNewEmail} onChangeNewUsername={onChangeNewUsername}/>
          </Grid> */}
        </Grid>
      </div>
    )
  }

  if (allAnswers.length === answers.length) {
    return (
      <div>
        <List>
          {Object.entries(answers).map((answer) => <AnswerListItem name={answer[1].answerer_name} body={answer[1].body} date={answer[1].date} helpfulness={answer[1].helpfulness} id={answer[1].answer_id} onYesAnswer={onYesAnswer} onAnswerReport={onAnswerReport}/>)}
        </List>
      </div>
    )
  }
}

export default AnswerList;