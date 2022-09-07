import React, { useState, useEffect } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import AnswerModalPhotos from '../AnswerModalPhotos.jsx';

describe('tests', () => {
  const user = userEvent.setup();
  it('should render modal photos with no photos', () => {
    const handleOpen = jest.fn();
    render(<AnswerModalPhotos onChangePhotos={jest.fn()} newPhotos={[]} onURLChange={jest.fn()} photoURL={'hi'} onFileChange={jest.fn()}/>);
  })

  it('should render modal photos with some photos', () => {
    const handleOpen = jest.fn();
    render(<AnswerModalPhotos onChangePhotos={jest.fn()} newPhotos={['hey']} onURLChange={jest.fn()} photoURL={'hi'} onFileChange={jest.fn()}/>);
  })

  it('should render modal photos with 5 photos', () => {
    const handleOpen = jest.fn();
    render(<AnswerModalPhotos onChangePhotos={jest.fn()} newPhotos={['hey', 'hi', 'bye', '123', '543']} onURLChange={jest.fn()} photoURL={'hi'} onFileChange={jest.fn()}/>);
  })

})