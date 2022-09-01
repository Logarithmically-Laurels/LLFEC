import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, List, Divider, Paper, Typography } from "@mui/material";

const AnswerListItem = ({name, body, date, helpfulness, id, onYesAnswer, onAnswerReport}) => {
  let newTime = date.slice(0,10);

  return (
    <ListItem>
      <Paper elevation={0}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
          <Typography color="#5A5A5A"><strong>A: </strong>{body}</Typography>
          </Grid>
          <Grid item xs={12}>
            <span><Typography color="#808080" variant="caption"><i>{name} on {newTime}</i>&nbsp;&nbsp;|&nbsp;&nbsp;</Typography></span>
            <span><Typography color="#5A5A5A" variant="caption" id={id} onClick={onYesAnswer}>Helpful? Yes ({helpfulness})&nbsp;&nbsp;|&nbsp;&nbsp;</Typography></span>
            <span><u><Typography color="#808080" id={id} variant="caption" onClick={onAnswerReport}>Report</Typography></u></span>
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  )
}

export default AnswerListItem;