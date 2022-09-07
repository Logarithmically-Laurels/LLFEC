import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor, afterEach, fireEvent } from '@testing-library/react';
// import { createMount } from '@material-ui/core/test-utils'
import ReviewModalComponents from '../../Components/Reviews/reviewModalComponents.jsx'
import FormPhotoInput from '../../Components/Reviews/FormComponents/formPhotoInput'
import FormPhotoModal from '../../Components/Reviews/FormComponents/formPhotoModal.jsx'
const data = require('../../../MockDataReviews.js');
const props = {

    handlePhotoDelete: jest.fn(),
    handlePhotoUpload: jest.fn(),
    onClick: jest.fn(),
    handleInnerOpen: jest.fn(),
    handleInnerClose: jest.fn(),
    photos: ['https://images.pexels.com/photos/4252937/pexels-photo-4252937.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'],

}



describe('Evaluate the Add a Review Modal ', () => {
  let wrapper;


  beforeAll(() => {

  })


  it('should render the initial panel', () => {
    wrapper = render(<FormPhotoModal {...props} />)
    return waitFor(() => expect(wrapper.getByTestId("reviewsPhotoModalRoot")).toBeInTheDocument());
  })

  it('should render one photo ', () => {
    expect(screen.getByTestId('reviewPhotoModalPhotos').children).toHaveLength(1)

  });



  it('should accept a photo URL ', () => {

    var textField = wrapper.getByTestId("reviewPhotoModalURL")

    fireEvent.change(textField, { target: { value: 'https://images.pexels.com/photos/4252937/pexels-photo-4252937.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load' } })


    expect(textField.value).toBe('https://images.pexels.com/photos/4252937/pexels-photo-4252937.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load')

  })


  it('should close the modal on submit', () => {
    const submitButton = wrapper.getByText(/Submit Photo/i)
    const user = userEvent.setup();
    return user.click(submitButton).then(()=>{
      expect(props.handleInnerClose).toBeCalled()
    })
  })

  it('should close the modal', () => {
    // const submit = jest.fn();
    const closeButton = wrapper.getByText(/Close/i)
    const user = userEvent.setup();
    return user.click(closeButton).then(() => {
      expect(props.handleInnerClose).toBeCalled()

    })

  })

})







