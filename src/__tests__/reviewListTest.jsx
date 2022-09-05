import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor, afterEach } from '@testing-library/react';
import App from '../Components/App.jsx';
import ReviewApp from '../Components/Reviews/reviewApp.jsx'
import ReviewList from '../Components/Reviews/reviewList.jsx'
import ReviewModal from '../Components/Reviews/reviewModal.jsx'
import axios from 'axios';
import { shallow } from 'enzyme';
const data = require('../../MockDataReviews.js');

axios.defaults.baseURL = 'http://localhost:3000';

jest.mock("axios");

// console.log(data.reviewsMock)

describe('evaluate reviewList page ', () => {
  const currentProd = 37311;
  const metaData = data.reviewsMetaMock;
  const numReviews = 426;
  const starsToRender = [];

  it('should render the reviewList component', () => {
    axios.mockResolvedValue({ data: data.reviewsMock })
    // render(<ReviewApp currentProd={data.firstProduct[0]} />)
    render(<ReviewList currentProd={currentProd} metaData={metaData} numReviews={numReviews} starsToRender={starsToRender}/>)
    // jest.mock('../Components/Reviews/reviewList.jsx', () => () => <mock-reviewlist />)
    return waitFor(() => expect(screen.getByTestId('reviewListRoot')).toBeInTheDocument());

  })
  it('should count the correct number of reviews ', ()=>{
    axios.mockResolvedValue({ data: data.reviewsMock })
    expect(screen.getByTestId('reviewListTotalReviews').textContent).toEqual('Total Reviews: 426 ')
  });

    it('should click a button', () =>{
    const user = userEvent.setup();
    return user.click(screen.getByTestId('reviewModalButton')).then(()=>{
      render(<ReviewModal product={currentProd} metaData={data.reviewsMetaMock} />)
      return waitFor(() => expect(screen.getByTestId('reviewModal')).toHaveTextContent('Write Your Review'))
    })
  })


  it('should click a button', () =>{
    const user = userEvent.setup();
    return user.click(screen.getByTestId('reviewModalButton')).then(()=>{
      render(<ReviewModal product={currentProd} metaData={data.reviewsMetaMock} />)
      return waitFor(() => expect(screen.getByTestId('reviewModal')).toHaveTextContent('Write Your Review'))
    })
  })

  it ('should display two tiles when loaded', () =>{
    expect(screen.getByTestId('reviewListTiles').children).toHaveLength(2)
  })


  // it ('Newest reviews should display after selecting "newest" on the dropdown menu ',  ()=> {
  //   const user = userEvent.setup();
  //   return user.selectOptions(screen.getByTestId('reviewListSortSelector'), ['helpful']).then(()=>{
  //     expect(screen.getByTestId('1275329').toBeInTheDocument())
  //   })

  // })

})

