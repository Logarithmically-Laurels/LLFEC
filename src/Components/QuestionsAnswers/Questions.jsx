import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from './Search.jsx';
import AddQuestions from './AddQuestions.jsx';
import QuestionList from './QuestionList.jsx';
const authtoken = require("/config.js");


const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [email, setEmail] = useState('');

  const onQuestionChange = (e) => {
    setCurrentQuestion(e.target.value)
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onAddQuestion = () => {
    setQuestions = [...questions, currentQuestion]
  }

  useEffect(() => {
    axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions", {
      headers: {
        Authorization: authtoken.default,
        "Content-Type": "application/json"
      },
      params: {
        product_id: 37312,
      }
    })
      .then(res => {
        console.log(res.data.results);
        setQuestions(res.data.results);
      })
  }, [])

  return (
    <div>
      <Search />
      <QuestionList questions={questions}/>
      <AddQuestions onAddQuestion={onAddQuestion} onQuestionChange={onQuestionChange}/>
    </div>
  )
}

export default Questions;