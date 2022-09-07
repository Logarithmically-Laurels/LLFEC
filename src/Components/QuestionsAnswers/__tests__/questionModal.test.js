import React, { useState, useEffect } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import QuestionModal from '../QuestionModal.jsx';
jest.mock('axios');

describe('tests', () => {
  const user = userEvent.setup();
  it('should call handleopen', async () => {
    render(<QuestionModal onQuestionChange={jest.fn()} onAddQuestion={jest.fn()} onEmailChange={jest.fn()} onUserChange={jest.fn()} product_id={12345}/>);

    await user.click(screen.getByTestId('questionModal'));
    await user.click(screen.getByTestId('questionSubmit'));
    //expect(handleOpen).toHaveBeenCalled();
  })

})