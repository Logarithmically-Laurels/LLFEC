import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search.jsx";
import QuestionList from "./QuestionList.jsx";
import QuestionModal from "./QuestionModal.jsx";
import {
  Button,
  Grid,
  TextField,
  ListItem,
  Typography,
  Paper,
  Box,
} from "@mui/material";

const Questions = ({ currentProd }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [searched, setSearched] = useState("");
  const [shownQuestions, setShownQuestions] = useState(4);
  const [renderedQuestions, setRenderedQuestions] = useState([]);
  const [username, setUsername] = useState("");

  const onQuestionChange = (e) => {
    setCurrentQuestion(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onUserChange = (e) => {
    setUsername(e.target.value);
  };

  const onYes = (e) => {
    let question_id = e.target.id;
    axios
      .put(`/qa/questions/${question_id}/helpful`, { question_id })
      .then(() => {
        var options = {
          method: "GET",
          url: "/qa/questions",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            product_id: currentProd.id,
          },
        };
        axios(options)
          .then((res) => {
            let temp = res.data.results.sort(
              (a, b) =>
                parseFloat(b.question_helpfulness) -
                parseFloat(a.question_helpfulness)
            );
            setQuestions(temp);
            setRenderedQuestions(temp.slice(0, shownQuestions));
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const onReport = (e) => {
    let question_id = e.target.id;
    axios
      .put(`/qa/questions/${question_id}/report`, { question_id })
      .then(() => {
        var options = {
          method: "GET",
          url: "/qa/questions",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            product_id: currentProd.id,
          },
        };
        axios(options)
          .then((res) => {
            let temp = res.data.results.sort((a, b) => parseFloat(b.question_helpfulness) - parseFloat(a.question_helpfulness));
            // console.log(temp);
            setQuestions(temp);
            setRenderedQuestions(temp.slice(0, shownQuestions));
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const onAddQuestion = () => {
    axios
      .post(`/qa/questions`, {
        product_id: currentProd.id,
        body: currentQuestion,
        name: username,
        email: email,
      })
      .then(() => {
        var options = {
          method: "GET",
          url: "/qa/questions",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            product_id: currentProd.id,
          },
        };
        axios(options)
          .then((res) => {
            let temp = res.data.results.sort(
              (a, b) =>
                parseFloat(b.question_helpfulness) -
                parseFloat(a.question_helpfulness)
            );
            let temp2 = res.data.results.sort(
              (a, b) => parseFloat(b.question_id) - parseFloat(a.question_id)
            );
            setQuestions(temp);
            setRenderedQuestions([...renderedQuestions, temp2[0]]);
            setCurrentQuestion('');
            setUsername('');
            setEmail('');
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const onSearchChange = (e) => {
    setSearched(e.target.value);
  };

  const showMoreQuestions = () => {
    setShownQuestions(shownQuestions + 2);
  };

  useEffect(() => {
    var options = {
      method: "GET",
      url: "/qa/questions",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        product_id: currentProd.id,
      },
    };
    axios(options)
      .then((res) => {
        console.log(res);
        let temp = res.data.results.sort(
          (a, b) =>
            parseFloat(b.question_helpfulness) -
            parseFloat(a.question_helpfulness)
        );
        setQuestions(temp);
        setRenderedQuestions(temp.slice(0, shownQuestions));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [shownQuestions]);

  useEffect(() => {
    let temp = [];
    if (searched.length >= 3) {
      for (let element of questions) {
        if (
          element.question_body.toLowerCase().includes(searched.toLowerCase())
        ) {
          temp.push(element);
        }
      }
      setRenderedQuestions(temp);
    } else {
      var options = {
        method: "GET",
        url: "/qa/questions",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          product_id: currentProd.id,
        },
      };
      axios(options)
        .then((res) => {
          let temp = res.data.results.sort(
            (a, b) =>
              parseFloat(b.question_helpfulness) -
              parseFloat(a.question_helpfulness)
          );
          setQuestions(temp);
          setRenderedQuestions(temp.slice(0, shownQuestions));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searched])

  return (
    <Typography textAlign="center">
      <Search onSearchChange={onSearchChange} />
      <br></br>
      <Box
        component="span"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <QuestionList
          questions={questions}
          onYes={onYes}
          showMoreQuestions={showMoreQuestions}
          renderedQuestions={renderedQuestions}
          onReport={onReport}
          onAddQuestion={onAddQuestion}
          onQuestionChange={onQuestionChange}
          onUserChange={onUserChange}
          onEmailChange={onEmailChange}
          product_id={currentProd.id}
        />
      </Box>
    </Typography>
  );
};

export default Questions;
