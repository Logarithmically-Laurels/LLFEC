import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, List, Typography, Paper } from "@mui/material";
import AnswerListItem from './AnswerListItem.jsx';
import AddAnswer from './AddAnswer.jsx';

const AnswerList = ({answers}) => {
  const [addAnswer, setAddAnswer] = useState(false);
  const [newAnswerBody, setNewAnswerBody] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newAnswerID, setNewAnswerID] = useState(0);
  const [newHelpfulness, setNewHelpfulness] = useState(0);
  const [newDate, setNewDate] = useState('');
  const onClickAddAnswer = () => {
    setAddAnswer(!addAnswer);
  }

  const onAnswerSubmit = () => {
    setAddAnswer(!addAnswer);
    console.log(newAnswerBody);
    console.log(newUsername);
    console.log(newEmail);
    console.log(newAnswerID);
    console.log(newDate);
    console.log(answers);
  }

  const onChangeNewAnswer = (e) => {
    let date = new Date();
    setNewAnswerBody(e.target.value);
    setNewAnswerID(Math.floor(1000000 + Math.random() * 9000000));
    setNewDate(date);
  }

  const onChangeNewUsername = (e) => {
    setNewUsername(e.target.value);
  }

  const onChangeNewEmail = (e) => {
    setNewEmail(e.target.value);
  }

  if (addAnswer === false) {
    return (
      <div>
        <List>
          {Object.entries(answers).map((answer) => <AnswerListItem name={answer[1].answerer_name} body={answer[1].body} date={answer[1].date} helpfulness={answer[1].helpfulness} id={answer[1].id}/>)}
        </List>
        <Typography onClick={onClickAddAnswer}>
          Add an answer...
        </Typography>
      </div>
    )
  }

  if (addAnswer === true) {
    return (
      <div>
        <List>
          {Object.entries(answers).map((answer) => <AnswerListItem name={answer[1].answerer_name} body={answer[1].body} date={answer[1].date} helpfulness={answer[1].helpfulness} id={answer[1].id}/>)}
        </List>
        <AddAnswer onAnswerSubmit={onAnswerSubmit} onChangeNewAnswer={onChangeNewAnswer} onChangeNewEmail={onChangeNewEmail} onChangeNewUsername={onChangeNewUsername}/>
      </div>
    )
  }

}

export default AnswerList;