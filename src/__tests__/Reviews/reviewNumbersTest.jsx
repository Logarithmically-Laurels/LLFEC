import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor, afterEach } from '@testing-library/react';
import ReviewApp from '../../Components/Reviews/reviewApp.jsx'
import ReviewNumbers from '../../Components/Reviews/reviewNumbers.jsx'
import axios from 'axios';
const data = require('../../../MockDataReviews.js');



describe('Evaluate numbers panel ', () => {

  it('should render the initial panel', () => {

    render(<ReviewNumbers
      product_id={data.firstProduct.id}
      metaData={data.reviewsMetaMock}
      numReviews={426}
      starsToRender={[]}
      />)

    return waitFor(() => expect(screen.getByTestId("reviewNumbersTitle")).toBeInTheDocument());
  })
});

describe('evaluate reviewApp page ', () => {

  it('should render a slider for 5 ratings (1-5 stars)', () => {
      expect(screen.getByTestId('reviewNumbersRatingStack').children).toHaveLength(5)

  })


})

