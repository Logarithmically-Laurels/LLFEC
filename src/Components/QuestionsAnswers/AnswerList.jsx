import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, List, Typography, Paper } from "@mui/material";
import AnswerListItem from './AnswerListItem.jsx';
import AddAnswer from './AddAnswer.jsx';
import AnswerModal from "./AnswerModal.jsx";

const AnswerList = ({answers, id, onChangeNewAnswer, onChangeNewEmail, onChangeNewUsername, onClickAddAnswer, addAnswer, onAnswerSubmit, onClickShowMoreAnswers, onClickHideMoreAnswers, onYesAnswer, onAnswerReport}) => {

    return (
      <div>
        <List>
          {Object.entries(answers).map((answer) => <AnswerListItem name={answer[1].answerer_name} body={answer[1].body} date={answer[1].date} helpfulness={answer[1].helpfulness} id={answer[1].answer_id} onYesAnswer={onYesAnswer} onAnswerReport={onAnswerReport}/>)}
        </List>
        {/* <Button variant="outlined" onClick={onClickAddAnswer}>
          Add an answer...
        </Button> */}
        <Grid container spacing={0} textAlign="center">
          <Grid xs={3}>
            <Button size="small" variant="outlined" onClick={onClickShowMoreAnswers}>
              Show more answers...
            </Button>
          </Grid>
          <Grid xs={2}>
            <AnswerModal onAnswerSubmit={onAnswerSubmit} onChangeNewAnswer={onChangeNewAnswer} onChangeNewEmail={onChangeNewEmail} onChangeNewUsername={onChangeNewUsername}/>
          </Grid>
          {/* <Grid xs={4}>
            <Button size="small" variant="outlined" onClick={onClickHideMoreAnswers}>
              Hide answers...
            </Button>
          </Grid> */}
        </Grid>
      </div>
    )

  // if (addAnswer === true) {
  //   return (
  //     <div>
  //       <List>
  //         {Object.entries(answers).map((answer) => <AnswerListItem name={answer[1].answerer_name} body={answer[1].body} date={answer[1].date} helpfulness={answer[1].helpfulness} id={answer[1].id} onYesAnswer={onYesAnswer}/>)}
  //       </List>
  //       <AddAnswer onAnswerSubmit={onAnswerSubmit} onChangeNewAnswer={onChangeNewAnswer} onChangeNewEmail={onChangeNewEmail} onChangeNewUsername={onChangeNewUsername}/>
  //     </div>
  //   )
  // }

}

export default AnswerList;