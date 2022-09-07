import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor, afterEach, fireEvent } from '@testing-library/react';
import FormBodyInput from '../../Components/Reviews/FormComponents/formBodyInput.jsx'
// import { TextField } from '@material-ui/core';
const data = require('../../../MockDataReviews.js');
var props = {
  handleBodyChange: jest.fn(),

}


describe('Evaluate numbers panel ', () => {

  it('should render the initial panel', () => {

    render(<FormBodyInput {...props} />)

    return waitFor(() => expect(screen.getByTestId("FormBodyInputTextField")).toBeInTheDocument());
  })


  it('should display a counter of characters left. ', () => {
    var textField = screen.getByTestId("FormBodyInputTextField")

    fireEvent.change(textField, { target: { value: 'This is 21 characters' } })

    // expect(props.handleBodyChange).toHaveBeenCalledTimes(1);

    expect(textField.value).toBe('This is 21 characters')


  })

})

