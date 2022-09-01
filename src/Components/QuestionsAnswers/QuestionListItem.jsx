import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, TextField, ListItem, Typography, Paper, Box } from "@mui/material";
import AnswerList from './AnswerList.jsx';

const QuestionListItem = ({question, answers, question_date, question_helpfulness, onYes, question_id, asker_name, onReport}) => {
  const [newAnswers, setNewAnswers] = useState('');
  const [addAnswer, setAddAnswer] = useState(false);
  const [newAnswerBody, setNewAnswerBody] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newHelpfulness, setNewHelpfulness] = useState(0);
  const [renderedAnswers, setRenderedAnswers] = useState('');
  const [numOfRenderedAnswers, setNumOfRenderedAnswers] = useState(2);

  let newTime = question_date.slice(0,10);

  const onClickAddAnswer = () => {
    setAddAnswer(!addAnswer);
  }

  const onAnswerSubmit = () => {
    setAddAnswer(!addAnswer);
    axios.post(`/qa/questions/${question_id}/answers`, {
        question_id: question_id,
        body: newAnswerBody,
        name: newUsername,
        email: newEmail,
        photos: []
    })
      .then(() => {
        var options = {
          method: "GET",
          url: `/qa/questions/${question_id}/answers`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        axios(options)
          .then((res) => {
            let temp = res.data.results;
            let temp2 = res.data.results.sort((a, b) => parseFloat(b.answer_id) - parseFloat(a.answer_id));
            setNewAnswers(temp);
            setRenderedAnswers([...renderedAnswers, temp2[0]]);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  const onChangeNewAnswer = (e) => {
    setNewAnswerBody(e.target.value);
  }

  const onChangeNewUsername = (e) => {
    setNewUsername(e.target.value);
  }

  const onChangeNewEmail = (e) => {
    setNewEmail(e.target.value);
  }

  const onYesAnswer = (e) => {
    let answer_id = e.target.id;
    axios.put(`/qa/answers/${answer_id}/helpful`, {answer_id})
      .then(() => {
        var options = {
          method: "GET",
          url: `/qa/questions/${question_id}/answers`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        axios(options)
          .then((res) => {
            setRenderedAnswers(res.data.results.slice(0, numOfRenderedAnswers));
            setNewAnswers(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      })
  }

  const onAnswerReport = (e) => {
    let answer_id = e.target.id;
    axios.put(`/qa/answers/${answer_id}/report`, {answer_id})
      .then(() => {
        var options = {
          method: "GET",
          url: `/qa/questions/${question_id}/answers`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        axios(options)
          .then((res) => {
            setRenderedAnswers(res.data.results.slice(0, numOfRenderedAnswers));
            setNewAnswers(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      })
  }



  const onClickShowMoreAnswers = () => {
    setNumOfRenderedAnswers(numOfRenderedAnswers + 2);
  }

  const onClickHideMoreAnswers = () => {
    setNumOfRenderedAnswers(numOfRenderedAnswers - 2);
  }

  useEffect(() => {
    var options = {
      method: "GET",
      url: `/qa/questions/${question_id}/answers`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(options)
      .then((res) => {
        setRenderedAnswers(res.data.results.slice(0, numOfRenderedAnswers));
        setNewAnswers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [numOfRenderedAnswers]);

  return (
    <Box component="span" sx={{display:"flex", justifyContent:"center", alignItems:"center", width:'900px'}}>
      <ListItem>
        <Paper elevation={6}>
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Typography color="#5A5A5A" variant="h6"><strong>Q: {question}</strong></Typography>
          </Grid>
          <Grid item xs ={2} textAlign="center">
            <Typography color="#5A5A5A" variant="caption" id={question_id} isClicked={false} onClick={onYes}>Helpful? | Yes ({question_helpfulness})</Typography>
          </Grid>
          <Grid item xs={12}>
            <AnswerList answers={renderedAnswers} onChangeNewAnswer={onChangeNewAnswer} onChangeNewEmail={onChangeNewEmail} onChangeNewUsername={onChangeNewUsername} onClickAddAnswer={onClickAddAnswer} addAnswer={addAnswer} onAnswerSubmit={onAnswerSubmit} onClickShowMoreAnswers={onClickShowMoreAnswers} onClickHideMoreAnswers={onClickHideMoreAnswers} onYesAnswer={onYesAnswer} onAnswerReport={onAnswerReport}/>
          </Grid>
          <Grid item xs={11}>
            <Typography color="#5A5A5A" variant="caption"><i>Posted by {asker_name} on {newTime}</i></Typography>
          </Grid>
          <Grid item xs={1}>
            <u><Typography color="#5A5A5A" variant="caption" id={question_id} onClick={onReport}>Report</Typography></u>
          </Grid>
        </Grid>
        </Paper>
      </ListItem>
    </Box>
  )
}

export default QuestionListItem;