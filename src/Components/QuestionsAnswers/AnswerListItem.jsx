import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, List, Divider, Paper, Typography } from "@mui/material";

const AnswerListItem = ({name, body, date, helpfulness, id, onYesAnswer, onAnswerReport, photos}) => {
  const [helped, setHelped] = useState(false);

  let newTime = date.slice(0,10);

  const helpfulAnswer = (e) => {
    if (helped === false) {
      onYesAnswer(e);
      setHelped(true);
    }
  }

  if (photos.length > 0) {
    return (
      <ListItem>
        <Paper elevation={0}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography color="#717171"><strong>A: </strong>{body}</Typography>
            </Grid>
            <Grid item xs={12}>
              {photos.map((photo) => <span><img width={100} height={100} src={`${photo.url}`}/>&nbsp;&nbsp;</span>)}
            </Grid>
            <Grid item xs={12}>
              <span><Typography color="#808080" variant="caption"><i>{name} on {newTime}</i>&nbsp;&nbsp;|&nbsp;&nbsp;</Typography></span>
              <span><Typography color="#717171" variant="caption" id={id} onClick={helpfulAnswer}>Helpful? Yes ({helpfulness})&nbsp;&nbsp;|&nbsp;&nbsp;</Typography></span>
              <span><u><Typography color="#808080" id={id} variant="caption" onClick={onAnswerReport}>Report</Typography></u></span>
            </Grid>
          </Grid>
        </Paper>
      </ListItem>
    )
  } else {
    return (
      <ListItem>
        <Paper elevation={0}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography color="#717171"><strong>A: </strong>{body}</Typography>
            </Grid>
            <Grid item xs={12}>
              <span><Typography color="#808080" variant="caption"><i>{name} on {newTime}</i>&nbsp;&nbsp;|&nbsp;&nbsp;</Typography></span>
              <span><Typography color="#717171" variant="caption" id={id} onClick={helpfulAnswer}>Helpful? Yes ({helpfulness})&nbsp;&nbsp;|&nbsp;&nbsp;</Typography></span>
              <span><u><Typography color="#808080" id={id} variant="caption" onClick={onAnswerReport}>Report</Typography></u></span>
            </Grid>
          </Grid>
        </Paper>
      </ListItem>
    )
  }
}

export default AnswerListItem;