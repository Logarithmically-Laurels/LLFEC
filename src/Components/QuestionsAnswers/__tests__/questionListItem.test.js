import React, { useState, useEffect } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import QuestionListItem from '../QuestionListItem.jsx';
import axios from 'axios';

const temp = {
  "5987140": {
      "id": 5987140,
      "body": "jdjdjdjdjdjdjdjdjd",
      "date": "2022-07-23T00:00:00.000Z",
      "answerer_name": "dcdcdc",
      "helpfulness": 6,
      "photos": [
          "http://res.cloudinary.com/dl9zxpaoq/image/upload/v1658586930/duw3xpuh9ieugapjyrub.jpg"
      ]
  },
  "5987166": {
      "id": 5987166,
      "body": "yo",
      "date": "2022-07-23T00:00:00.000Z",
      "answerer_name": "dude",
      "helpfulness": 0,
      "photos": []
  },
  "5987886": {
      "id": 5987886,
      "body": "Yeah goes great with black",
      "date": "2022-09-02T00:00:00.000Z",
      "answerer_name": "dudeBro",
      "helpfulness": 1,
      "photos": []
  }
}

describe('tests', function() {
  const user = userEvent.setup();

  it('should render questions', () => {
    render(<QuestionListItem question={'hello'} answers={temp} question_date={'2022-07-27T00:00:00.000Z'} question_helpfulness={5} onYes={() => {}} question_id={5987140} asker_name={'hey'} onReport={() => {}}/>);
    expect(screen.getByText('Q: hello')).toBeInTheDocument();
  })

  it('should render questions without time', () => {
    render(<QuestionListItem question={'hello'} answers={temp} question_date={null} question_helpfulness={5} onYes={() => {}} question_id={5987140} asker_name={'hey'} onReport={() => {}}/>);
    expect(screen.getByText('Q: hello')).toBeInTheDocument();
  })

})