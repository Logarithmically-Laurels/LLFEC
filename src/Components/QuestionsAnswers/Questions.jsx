import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search.jsx";
import AddQuestions from "./AddQuestions.jsx";
import QuestionList from "./QuestionList.jsx";

const Questions = (props) => {
  console.log(props);
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
    axios
      .post(`/qa/questions`, {
        product_id: currentProd[0].id,
        body: currentQuestion,
        name: username,
        email: email,
      })
      .then(() => {
        var options = {
          method: "GET",
          url: "/qa/questions",
          headers: {
            Authorization: authtoken.authtoken,
            "Content-Type": "application/json",
          },
          params: {
            product_id: currentProd[0].id,
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
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const onSearchChange = (e) => {
    let temp = [];
    setSearched(e.target.value);
    console.log(searched);
    if (searched.length > 3) {
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
          Authorization: authtoken.authtoken,
          "Content-Type": "application/json",
        },
        params: {
          product_id: currentProd[0].id,
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
        product_id: currentProd[0].id,
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
  }, [shownQuestions]);

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
          product_id={currentProd[0].id}
        />
      </Box>
    </Typography>
  );
};

export default Questions;
