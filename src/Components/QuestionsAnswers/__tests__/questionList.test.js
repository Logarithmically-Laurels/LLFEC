import React, { useState, useEffect } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import QuestionList from '../QuestionList.jsx';
import QuestionListItem from '../QuestionListItem.jsx';
import axios from 'axios';

const firstProduct = [
  {
    id: 37312,
    campus: "hr-rfe",
    name: "Camo Onesie",
    slogan: "Blend in to your crowd",
    description:
      "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    category: "Jackets",
    default_price: "140.00",
    created_at: "2021-08-13T14:37:33.145Z",
    updated_at: "2021-08-13T14:37:33.145Z",
  },
];

const tempData = [
  {
      "question_id": 642826,
      "question_body": "When is this available?",
      "question_date": "2022-08-29T00:00:00.000Z",
      "asker_name": "John Doe",
      "question_helpfulness": 18,
      "reported": false,
      "answers": {
          "5987521": {
              "id": 5987521,
              "body": "temporary answer",
              "date": "2022-08-30T00:00:00.000Z",
              "answerer_name": "John Doe",
              "helpfulness": 4,
              "photos": []
          },
          "5987768": {
              "id": 5987768,
              "body": "testing",
              "date": "2022-09-01T00:00:00.000Z",
              "answerer_name": "tester",
              "helpfulness": 1,
              "photos": []
          },
          "5988098": {
              "id": 5988098,
              "body": "Photo tests",
              "date": "2022-09-05T00:00:00.000Z",
              "answerer_name": "John Smith",
              "helpfulness": 7,
              "photos": [
                  "blob:http://localhost:3000/694555f3-4888-43c1-bf8d-6b6dad65026d",
                  "blob:http://localhost:3000/38b46134-70e5-43ad-a26e-325acc8493d9"
              ]
          },
          "5988102": {
              "id": 5988102,
              "body": "hey",
              "date": "2022-09-05T00:00:00.000Z",
              "answerer_name": "hi",
              "helpfulness": 2,
              "photos": [
                  "blob:http://localhost:3000/e3405be8-6f7b-4507-b1c8-4691b9a0f488"
              ]
          }
      }
  },
  {
      "question_id": 642578,
      "question_body": "How does this fit?",
      "question_date": "2022-07-27T00:00:00.000Z",
      "asker_name": "John Doe",
      "question_helpfulness": 13,
      "reported": false,
      "answers": {
          "5987998": {
              "id": 5987998,
              "body": "Need to add an answers for testing purposes.",
              "date": "2022-09-04T00:00:00.000Z",
              "answerer_name": "janeDoe",
              "helpfulness": 1,
              "photos": []
          }
      }
  },
  {
      "question_id": 642829,
      "question_body": "When is this available?",
      "question_date": "2022-08-29T00:00:00.000Z",
      "asker_name": "John Doe",
      "question_helpfulness": 10,
      "reported": false,
      "answers": {}
  },
  {
      "question_id": 642770,
      "question_body": "Here a question for ya",
      "question_date": "2022-08-29T00:00:00.000Z",
      "asker_name": "Grant",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {
          "5988099": {
              "id": 5988099,
              "body": "thanks",
              "date": "2022-09-05T00:00:00.000Z",
              "answerer_name": "ty",
              "helpfulness": 0,
              "photos": []
          }
      }
  }
]

describe('tests', function() {
  const user = userEvent.setup();

  it('should render question list', () => {
    render(<QuestionList questions={tempData} onYes={jest.fn()} showMoreQuestions={jest.fn()} renderedQuestions={tempData} onReport={() => {}} onQuestionChange={() => {}} onAddQuestion={() => {}} onEmailChange={() => {}} onUserChange={() => {}} product_id={37312}/>);
    // expect(screen.getByText('Ask a question +')).toBeInTheDocument();
  })

})