import React, { useState, useEffect } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import Questions from '../Questions.jsx';
import axios from 'axios';
jest.mock('axios');

const result = {
  data: {
    product_id: 37312,
    results: [
    {
      "question_id": 553754,
      "question_body": "question",
      "question_date": "2021-11-29T00:00:00.000Z",
      "asker_name": "ExcesssiveQuestioner",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {
          "5987499": {
              "id": 5987499,
              "body": "temporary answer",
              "date": "2022-08-30T00:00:00.000Z",
              "answerer_name": "John Doe",
              "helpfulness": 0,
              "photos": []
          }
      }
    },
    {
        "question_id": 642268,
        "question_body": "How does this fit?",
        "question_date": "2022-07-19T00:00:00.000Z",
        "asker_name": "John Doe",
        "question_helpfulness": 0,
        "reported": false,
        "answers": {}
    },
  ]}
}

axios.mockImplementation(() => Promise.resolve(result))

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

describe('tests', function() {
  const user = userEvent.setup();

  it('should render questions', () => {
    render(<Questions currentProd={firstProduct}/>);
    expect(screen.getByText('Ask a question +')).toBeInTheDocument();
  })

})