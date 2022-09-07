import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen as wrapper, waitFor, afterEach, fireEvent } from '@testing-library/react';
import ReviewModalComponents from '../../Components/Reviews/reviewModalComponents.jsx'
import ReviewModal from '../../Components/Reviews/reviewModal.jsx'
import FormNicknameInput from '../../Components/Reviews/FormComponents/formNicknameInput.jsx';
import axios from 'axios';
const data = require('../../../MockDataReviews.js');

const props = {
  product: data.firstProduct,
  metaData: data.reviewsMetaMock,
  handleClose: jest.fn(),
}

jest.mock("axios", () => {
  return {
    then: jest.fn(() => Promise.resolve())
  }
});

describe('Evaluate the Review Modal', () => {
  let wrapper;


  it('should render the initial form ', () => {
    wrapper = render(<ReviewModal {...props} />)
    return waitFor(() => expect(wrapper.getByTestId('reviewModalRoot')).toBeInTheDocument());
  })





  // describe('Evaluate the Add a Review Modal ', () => {

  it('should render the initial panel', () => {


    expect(wrapper.getByTestId("reviewModalComponentsRoot")).toBeInTheDocument();
  })

  it('should use a radio button for recommending products ', () => {
    const secondRadio = wrapper.getByLabelText('Yes');
    fireEvent.click(secondRadio);
    expect(secondRadio).toBeChecked();

    const firstRadio = wrapper.getByLabelText('No');
    fireEvent.click(firstRadio);
    expect(firstRadio).toBeChecked();
    expect(secondRadio).not.toBeChecked();
  });



  it('should accept a nickname ', () => {

    var textField = wrapper.getByTestId("reviewNicknameInputTextField")

    fireEvent.change(textField, { target: { value: 'Nickname' } })

    expect(textField.value).toBe('Nickname')

  })
  it('should run handleFormSubmit on submit', () => {
    const submitButton = wrapper.getByText(/Submit/i)
    const user = userEvent.setup();
    // const rating = wrapper.getByLabelText('rating')
    // fireEvent.change(rating, {target: {value: 4}})
    const secondRadio = wrapper.getByLabelText('Yes');
    fireEvent.click(secondRadio)
    const summary = wrapper.getByTestId('reviewModalComponentsSummary')
    fireEvent.change(summary, { target: { value: 'Summary' } })
    const body = wrapper.getByTestId("FormBodyInputTextField")
    fireEvent.change(body, { target: { value: 'I need a paragraph that is at least 50 characters long for testing.' } })
    const email = wrapper.getByTestId("formEmailInputTextField")
    fireEvent.change(email, { target: { value: 'hi@gmail.com' } })
    const photos = wrapper.getByLabelText('photos')
    fireEvent.change(photos, { target: { value: [] } })
    const char = wrapper.getByLabelText('Runs tight')
    fireEvent.click(char)
    return user.click(submitButton).then(() => {
      var results = jest.fn();
      axios.mockResolvedValue({ data: 'success' })

      expect(props.handleClose).toHaveBeenCalled();

    })
  })

  // })
})







