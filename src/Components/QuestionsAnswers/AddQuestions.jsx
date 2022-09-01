import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";

const AddQuestions = ({onQuestionChange, onAddQuestion, onEmailChange, onUserChange, product_id}) => {
  return (
    <form>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField type='text' placeholder='Ask a question...' onChange={onQuestionChange} size="small" style={{width: 300}}></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField type='text' placeholder='Username...' onChange={onUserChange} size="small" style={{width: 300}}></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField type='email' placeholder='johnsmith@gmail.com' onChange={onEmailChange} size="small" style={{width: 200}}></TextField>
          <Button onClick={onAddQuestion} variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddQuestions;