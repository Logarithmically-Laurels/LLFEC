import React, { useState, useEffect } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import AnswerList from '../AnswerList.jsx';
import AnswerListItem from '../AnswerListItem.jsx';
import axios from 'axios';

describe('tests', function() {
  const user = userEvent.setup();

  it('should render questions', () => {
    render(<AnswerListItem name={'hey'} body={'hi'} date={"2022-07-15T00:00:00.000Z"} helpfulness={5} id={123456} onYesAnswer={() => {}} onAnswerReport={() => {}} photos={['hello']}/>);
    //expect(screen.getByText('Ask a question +')).toBeInTheDocument();
  })

})