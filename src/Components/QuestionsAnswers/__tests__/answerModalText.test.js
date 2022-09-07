import React, { useState, useEffect } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import AnswerModalText from '../AnswerModalText.jsx';

describe('tests', () => {
  const user = userEvent.setup();
  it('should call handleopen', async () => {
    const handleOpen = jest.fn();
    render(<AnswerModalText onAnswerSubmit={jest.fn()} onChangeNewAnswer={() => {}} onChangeNewEmail={() => {}} onChangeNewUsername={() => {}} onChangePhotos={() => {}} newPhotos={['hey']} onURLChange={() => {}} photoURL={'h'} onFileChange={() => {}} newAnswerBody={'hey'} newEmail={'a@email.com'} newUsername={'hi'}/>);

    await user.click(screen.getByTestId('answerModal'))
    await user.click(screen.getByTestId('answerSubmit'));
    //expect(handleOpen).toHaveBeenCalled();
  })

})
