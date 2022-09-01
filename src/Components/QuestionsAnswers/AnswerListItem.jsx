import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, List, Divider, Paper, Typography } from "@mui/material";

const AnswerListItem = ({name, body, date, helpfulness, id, onYesAnswer, onAnswerReport}) => {
  let newTime = date.slice(0,10);

  return (
    <ListItem>
      <Paper elevation={2}>
        <Grid container spacing={0}>
          <Grid item xs={8.5}>
          <Typography color="#5A5A5A"><strong>A: </strong>{body}</Typography>
          </Grid>
          <Grid item xs ={3.5}>
            <Typography color="#5A5A5A" variant="caption" id={id} onClick={onYesAnswer}>Helpful? | Yes ({helpfulness})</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography color="#5A5A5A" variant="caption"><i>Answered by {name} on {newTime}</i></Typography>
          </Grid>
          <Grid item xs={3}>
            <u><Typography color="#5A5A5A" id={id} variant="caption" onClick={onAnswerReport}>Report</Typography></u>
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  )
}

export default AnswerListItem;