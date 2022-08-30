import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, List, Divider, Paper, Typography } from "@mui/material";

const AnswerListItem = ({name, body, date, helpfulness, id}) => {
  let newTime = date.slice(0,10);

  return (
    <ListItem>
      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={8}>
          <Typography><strong>A: </strong>{body}</Typography>
          </Grid>
          <Grid item xs ={4}>
            <Typography variant="caption" id={id}>Helpful? Yes ({helpfulness})</Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="caption"><i>Answered by {name} on {newTime}</i></Typography>
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  )
}

export default AnswerListItem;