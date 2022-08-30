import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";

const AddAnswer = ({onAnswerSubmit, onChangeNewAnswer, onChangeNewEmail, onChangeNewUsername}) => {
  return (
    <form>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField type='text' placeholder='Answer the question...' size="small" style={{width: 300}} onChange={onChangeNewAnswer}></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField type='text' placeholder='Username...' size="small" style={{width: 300}} onChange={onChangeNewUsername}></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField type='email' placeholder='johnsmith@gmail.com' size="small" style={{width: 200}} onChange={onChangeNewEmail}></TextField>
          <Button variant="contained" onClick={onAnswerSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddAnswer