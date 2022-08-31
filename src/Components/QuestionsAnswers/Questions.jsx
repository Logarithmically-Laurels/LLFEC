import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search.jsx";
import AddQuestions from "./AddQuestions.jsx";
import QuestionList from "./QuestionList.jsx";
const authtoken = require("/config.js");

const Questions = (props) => {
  console.log(props);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [searched, setSearched] = useState("");

  const onQuestionChange = (e) => {
    setCurrentQuestion(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onYes = (e) => {
    let id = e.target.id;

    const updateState = () => {
      const newState = questions.map((question) => {
        if (parseInt(id) === parseInt(question.question_id)) {
          return {
            ...question,
            question_helpfulness: question.question_helpfulness - 1,
          };
        }
        return question;
      });
      setQuestions(newState);
      e.target.isClicked = true;
    };

    const updateAnotherState = () => {
      const newState = questions.map((question) => {
        if (parseInt(id) === parseInt(question.question_id)) {
          return {
            ...question,
            question_helpfulness: question.question_helpfulness + 1,
          };
        }
        return question;
      });
      setQuestions(newState);
      e.target.isClicked = false;
    };

    if (e.target.isClicked === false) {
      updateState();
    } else {
      updateAnotherState();
    }
  };

  const onAddQuestion = () => {
    setQuestions = [...questions, currentQuestion];
  };

  const onSearchChange = (e) => {
    let temp = [];
    setSearched(e.target.value);
    if (searched.length > 3) {
      for (let element of questions) {
        if (
          element.question_body.toLowerCase().includes(searched.toLowerCase())
        ) {
          temp.push(element);
        }
      }
      setQuestions(temp);
    } else {
      var options = {
        method: "GET",
        url: "/qa/questions",
        headers: {
          Authorization: authtoken.authtoken,
          "Content-Type": "application/json",
        },
      };
      axios(options)
        .then((res) => {
          setQuestions(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onSearchButton = () => {
    let temp = [];
    if (searched.length > 3) {
      for (let element of questions) {
        if (
          questions.question_body.toLowerCase().includes(searched.toLowerCase())
        ) {
          temp.push(element);
        }
      }
    }
  };

  useEffect(() => {
    console.log(authtoken);
    var options = {
      method: "GET",
      url: "/qa/questions",
      headers: {
        Authorization: authtoken.authtoken,
        "Content-Type": "application/json",
      },
    };
    axios(options)
      .then((res) => {
        console.log(res.data.results);
        setQuestions(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Search onSearchChange={onSearchChange} />
      <QuestionList questions={questions} onYes={onYes} />
      <AddQuestions
        onAddQuestion={onAddQuestion}
        onQuestionChange={onQuestionChange}
      />
    </div>
  );
};

export default Questions;
