import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Grid,
  TextField,
  ListItem,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import AnswerList from "./AnswerList.jsx";
import AnswerModal from "./AnswerModal.jsx";
import AnswerModalText from "./AnswerModalText.jsx";

const QuestionListItem = ({
  question,
  answers,
  question_date,
  question_helpfulness,
  onYes,
  question_id,
  asker_name,
  onReport,
}) => {
  const [newAnswers, setNewAnswers] = useState([]);
  const [addAnswer, setAddAnswer] = useState(false);
  const [newAnswerBody, setNewAnswerBody] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newHelpfulness, setNewHelpfulness] = useState(0);
  const [renderedAnswers, setRenderedAnswers] = useState([]);
  const [numOfRenderedAnswers, setNumOfRenderedAnswers] = useState(2);
  const [counter, setCounter] = useState(0);
  const [newPhotos, setNewPhotos] = useState([]);
  const [photoURL, setPhotoURL] = useState(null);
  const [helped, setHelped] = useState(false);

  let newTime;

  if (question_date) {
    newTime = question_date.slice(0, 10);
  } else {
    newTime = question_date;
  }

  const helpfulQuestion = (e) => {
    if (helped === false) {
      onYes(e);
      setHelped(true);
    }
  };

  const onClickAddAnswer = () => {
    setAddAnswer(!addAnswer);
  };

  const onAnswerSubmit = () => {
    setAddAnswer(!addAnswer);
    axios
      .post(`/qa/questions/${question_id}/answers`, {
        question_id: question_id,
        body: newAnswerBody,
        name: newUsername,
        email: newEmail,
        photos: newPhotos,
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
            let temp2 = res.data.results.sort(
              (a, b) => parseFloat(b.answer_id) - parseFloat(a.answer_id)
            );
            setNewAnswers(temp);
            setRenderedAnswers([...renderedAnswers, temp2[0]]);
            setNewAnswerBody("");
            setNewUsername("");
            setNewEmail("");
            setNewPhotos([]);
          })
          // .catch((err) => {
          //   console.log(err);
          // });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const onChangeNewAnswer = (e) => {
    setNewAnswerBody(e.target.value);
  };

  const onChangeNewUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const onChangeNewEmail = (e) => {
    setNewEmail(e.target.value);
  };

  const onURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const onChangePhotos = (e) => {
    setNewPhotos([...newPhotos, photoURL]);
    setPhotoURL("");
  };

  const onFileChange = (e) => {
    let temp = e.target.files[0];
    setPhotoURL(URL.createObjectURL(temp));
  };

  const onYesAnswer = (e) => {
    let answer_id = e.target.id;
    axios.put(`/qa/answers/${answer_id}/helpful`, { answer_id }).then(() => {
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
    });
  };

  const onAnswerReport = (e) => {
    let answer_id = e.target.id;
    axios.put(`/qa/answers/${answer_id}/report`, { answer_id }).then(() => {
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
    });
  };

  const onClickShowMoreAnswers = () => {
    setNumOfRenderedAnswers(numOfRenderedAnswers + 2);
  };

  const onClickHideMoreAnswers = () => {
    setNumOfRenderedAnswers(numOfRenderedAnswers - 2);
  };

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
  }, [answers, numOfRenderedAnswers]);

  if (newAnswers.length > 0) {
    return (
      <Box
        component="span"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1400px",
          width: "1400px"
        }}
      >
        <ListItem>
          <Paper elevation={1} sx={{ width: "100%" }}>
            <Grid container spacing={0}>
              <Grid item xs={9}>
                <Typography color="#5A5A5A" variant="h6">
                  <strong>Q: {question}</strong>
                </Typography>
              </Grid>
              <Grid item xs={1.5} textAlign="center">
                <span>
                  <Typography
                    color="#5A5A5A"
                    variant="caption"
                    id={question_id}
                    onClick={helpfulQuestion}
                  >
                    Helpful? | Yes ({question_helpfulness}
                    )&nbsp;&nbsp;&nbsp;&nbsp;|
                  </Typography>
                </span>
              </Grid>
              <Grid item xs={1.5}>
                <AnswerModalText
                  onAnswerSubmit={onAnswerSubmit}
                  onChangeNewAnswer={onChangeNewAnswer}
                  onChangeNewEmail={onChangeNewEmail}
                  onChangeNewUsername={onChangeNewUsername}
                  onChangePhotos={onChangePhotos}
                  newPhotos={newPhotos}
                  onURLChange={onURLChange}
                  photoURL={photoURL}
                  onFileChange={onFileChange}
                  newAnswerBody={newAnswerBody}
                  newEmail={newEmail}
                  newUsername={newUsername}
                />
              </Grid>
              <Grid item xs={12}>
                <AnswerList
                  answers={renderedAnswers}
                  onChangeNewAnswer={onChangeNewAnswer}
                  onChangeNewEmail={onChangeNewEmail}
                  onChangeNewUsername={onChangeNewUsername}
                  onClickAddAnswer={onClickAddAnswer}
                  addAnswer={addAnswer}
                  onAnswerSubmit={onAnswerSubmit}
                  onClickShowMoreAnswers={onClickShowMoreAnswers}
                  onClickHideMoreAnswers={onClickHideMoreAnswers}
                  onYesAnswer={onYesAnswer}
                  onAnswerReport={onAnswerReport}
                  allAnswers={newAnswers}
                />
              </Grid>
              <Grid item xs={12}>
                <span>
                  <Typography color="#808080" variant="caption">
                    <i>
                      Posted by {asker_name} on {newTime}
                    </i>{" "}
                    &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                  </Typography>
                </span>
                <span>
                  <u>
                    <Typography
                      color="#808080"
                      variant="caption"
                      id={question_id}
                      onClick={onReport}
                    >
                      {" "}
                      Report{" "}
                    </Typography>
                  </u>
                </span>
              </Grid>
            </Grid>
          </Paper>
        </ListItem>
      </Box>
    );
  } else {
    return (
      <Box
        component="span"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1400px",
          width: "1400px"
        }}
      >
        <ListItem>
          <Paper elevation={1} sx={{ width: "100%" }}>
            <Grid container spacing={0}>
              <Grid item xs={9}>
                <Typography color="#5A5A5A" variant="h6">
                  <strong>Q: {question}</strong>
                </Typography>
              </Grid>
              <Grid item xs={1.5} textAlign="center">
                <span>
                  <Typography
                    color="#5A5A5A"
                    variant="caption"
                    id={question_id}
                    onClick={helpfulQuestion}
                  >
                    Helpful? | Yes ({question_helpfulness}
                    )&nbsp;&nbsp;&nbsp;&nbsp;|
                  </Typography>
                </span>
              </Grid>
              <Grid item xs={1.5}>
                <AnswerModalText
                  onAnswerSubmit={onAnswerSubmit}
                  onChangeNewAnswer={onChangeNewAnswer}
                  onChangeNewEmail={onChangeNewEmail}
                  onChangeNewUsername={onChangeNewUsername}
                  onChangePhotos={onChangePhotos}
                  newPhotos={newPhotos}
                  onURLChange={onURLChange}
                  photoURL={photoURL}
                  onFileChange={onFileChange}
                  newAnswerBody={newAnswerBody}
                  newEmail={newEmail}
                  newUsername={newUsername}
                />
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0}>
                  <AnswerModal
                    onAnswerSubmit={onAnswerSubmit}
                    onChangeNewAnswer={onChangeNewAnswer}
                    onChangeNewEmail={onChangeNewEmail}
                    onChangeNewUsername={onChangeNewUsername}
                    onChangePhotos={onChangePhotos}
                    newPhotos={newPhotos}
                    onURLChange={onURLChange}
                    photoURL={photoURL}
                    onFileChange={onFileChange}
                    newAnswerBody={newAnswerBody}
                    newEmail={newEmail}
                    newUsername={newUsername}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <span>
                  <Typography color="#808080" variant="caption">
                    <i>
                      Posted by {asker_name} on {newTime}
                    </i>{" "}
                    &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                  </Typography>
                </span>
                <span>
                  <u>
                    <Typography
                      color="#808080"
                      variant="caption"
                      id={question_id}
                      onClick={onReport}
                    >
                      {" "}
                      Report{" "}
                    </Typography>
                  </u>
                </span>
              </Grid>
            </Grid>
          </Paper>
        </ListItem>
      </Box>
    );
  }
};

export default QuestionListItem;
