import React, { useState, useEffect } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import AnswerList from '../AnswerList.jsx';
import AnswerListItem from '../AnswerListItem.jsx';
import axios from 'axios';

const temp = [
  {
      "answer_id": 5986321,
      "body": "a",
      "date": "2022-07-15T00:00:00.000Z",
      "answerer_name": "a",
      "helpfulness": 0,
      "photos": []
  },
  {
      "answer_id": 5986409,
      "body": "AAA",
      "date": "2022-07-16T00:00:00.000Z",
      "answerer_name": "asd",
      "helpfulness": 0,
      "photos": []
  }
]

const temp2 = [
  {
      "answer_id": 5986321,
      "body": "a",
      "date": "2022-07-15T00:00:00.000Z",
      "answerer_name": "a",
      "helpfulness": 0,
      "photos": []
  },
  {
      "answer_id": 5986409,
      "body": "AAA",
      "date": "2022-07-16T00:00:00.000Z",
      "answerer_name": "asd",
      "helpfulness": 0,
      "photos": []
  },
  {
      "answer_id": 5986405,
      "body": "AAA",
      "date": "2022-07-16T00:00:00.000Z",
      "answerer_name": "asd",
      "helpfulness": 0,
      "photos": []
  }
]

describe('tests', function() {
  const user = userEvent.setup();

  it('should render answer list', () => {
    render(<AnswerList answers={temp} onChangeNewAnswer={() => {}} onChangeNewEmail={() => {}} onChangeNewUsername={() => {}} onClickAddAnswer={() => {}} addAnswer={() => {}} onAnswerSubmit={() => {}} onClickShowMoreAnswers={() => {}} onClickHideMoreAnswers={() => {}} onYesAnswer={() => {}} onAnswerReport={() => {}} allAnswers={temp}/>);
    expect(screen.getByText('a')).toBeInTheDocument();
  })

  it('should render the other answer list', () => {
    render(<AnswerList answers={temp} onChangeNewAnswer={() => {}} onChangeNewEmail={() => {}} onChangeNewUsername={() => {}} onClickAddAnswer={() => {}} addAnswer={() => {}} onAnswerSubmit={() => {}} onClickShowMoreAnswers={() => {}} onClickHideMoreAnswers={() => {}} onYesAnswer={() => {}} onAnswerReport={() => {}} allAnswers={temp2}/>);
    expect(screen.getByText('a')).toBeInTheDocument();
  })

})