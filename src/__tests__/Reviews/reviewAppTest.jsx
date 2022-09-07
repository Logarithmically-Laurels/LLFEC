import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor, afterEach } from '@testing-library/react';
import App from '../../Components/App.jsx';
import ReviewApp from '../../Components/Reviews/reviewApp'
import ReviewList from '../../Components/Reviews/reviewList.jsx'
import axios from 'axios';
import { shallow } from 'enzyme';
const data = require('../../../MockDataReviews.js');

axios.defaults.baseURL = 'http://localhost:3000';

jest.mock("axios");

describe('Evaluate initial loading page ', () => {

  it('should render the initial page', () => {

    axios.mockResolvedValue({ data: data.firstProduct });
    render(<App />)

    return waitFor(() => expect(screen.getByTestId("navBarLogo")).toBeInTheDocument());
  })
});

describe('evaluate reviewApp page ', () => {

  it('should render the reviews module', () => {

    axios.mockResolvedValue({ data: data.reviewsMetaMock })
    jest.mock('../../Components/Reviews/reviewApp.jsx', () => () => <mock-reviewapp />)
    return waitFor(() => expect(screen.getByTestId('reviewAppRoot')).toBeInTheDocument());

  })


})

