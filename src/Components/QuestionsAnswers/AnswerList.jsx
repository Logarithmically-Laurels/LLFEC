import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, List } from "@mui/material";

const AnswerList = ({answers}) => {
  return (
    <List>
      {answers.map((answer) => <AnswerListItem name={answer.answerer_name} body={answer.body} date={answer.date} helpfulness={answer.helpfulness}/>)}
    </List>
  )
}

export default AnswerList;