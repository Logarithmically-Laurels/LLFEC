import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor, afterEach, fireEvent } from '@testing-library/react';
import FormPhotoInput from '../../Components/Reviews/FormComponents/formPhotoInput.jsx'
import FormPhotoModal from '../../Components/Reviews/FormComponents/formPhotoModal.jsx'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const data = require('../../../MockDataReviews.js');
const props = {
  handlePhotoDelete: jest.fn(),
  handlePhotoUpload: jest.fn(),
  onClick: jest.fn(),
  handleOpen: jest.fn(),
  handleClose: jest.fn(),
  photos: ['https://images.pexels.com/photos/4252937/pexels-photo-4252937.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'],
}



describe('Evaluate the Add a Photo Modal ', () => {
  let wrapper;


  beforeAll(() => {

  })

  it('should render one photo ', () => {
    var photoArray = render(
      <Box sx={{ gridArea: 'photos' }} data-testid="reviewPhotoInputPhotos" >
        {props.photos.length > 0 &&
          props.photos.map((photo, index) => (
            <img src={photo} data-testid="reviewer photo" className='thumbnailModal' key={index} onClick={(index) => { props.handlePhotoDelete(index) }} ></img>
            ))
          }
      </Box>
    )
    expect(photoArray.getByTestId('reviewPhotoInputPhotos').children).toHaveLength(1)

    const userImage = photoArray.getByTestId('reviewer photo')
    const user = userEvent.setup();
    return user.click(userImage).then(() => {
      expect(props.handlePhotoDelete).toBeCalled()
    })
  });


  // it('should close the modal on submit', () => {
  //   const buttonSim = render(
  //    <Button variant="outlined" component="span" onClick={props.handleOpen} name="inputButton">
  //     Upload a Photo
  //   </Button>)

  //   const submitButton = buttonSim.getAllByRole('button', {name: 'inputButton'})
  //   const user = userEvent.setup();
  //   return user.click(submitButton).then(() => {
  //     expect(props.handleOpen).toBeCalled()
  //   })
  // })


    it('should render the initial panel', () => {
      wrapper = render(<FormPhotoInput {...props} />)
      return waitFor(() => expect(wrapper.getByTestId("reviewsFormPhotoInputRoot")).toBeInTheDocument());
    })



  })










