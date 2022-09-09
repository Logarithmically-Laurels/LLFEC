import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormPhotoModal from './formPhotoModal.jsx';

const FormPhotoInput = ({ }) => {
  const [photos, setPhotos] = useState([]);
  const [photosString, setPhotosString] = useState([])
  const [open, setOpen] = useState(false);
  const handleInnerOpen = () => setOpen(true);
  const handleInnerClose = () => setOpen(false);

  const [dontShow, setDontShow] = useState(false)

  const handlePhotoUpload = (e) => {
    console.log('handlephotoUpload')
    var photoArray = photos.slice()
    var photoArrayString = photosString;
    if (e?.target?.currentPhotoURL?.value) {
      console.log('e.target.value ', e.target.currentPhotoURL.value)
      var url = e.target.currentPhotoURL.value
    } else {
        var url = e;
        console.log('url', url)
    }
    if (typeof url === 'string') {
      photoArray.push(url,);
      console.log(photoArray)
      photoArrayString.push(url, toString())
      setPhotos([...photoArray])
      setPhotosString([...photoArrayString])
    }
  }

  const handlePhotoDelete = (index) => {
    var photoArray = photos;
    var photoArrayString = photosString;
    photoArray.splice(index, 1)
    photoArrayString.splice(index, 1)
    setPhotos([...photoArray])
    setPhotosString([...photoArrayString])
  }

  const onFileChange = (e) => {
    let temp = e.target.files[0];
    handlePhotoUpload(URL.createObjectURL(temp));
  }



  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    height: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    maxHeight: '70vh',
    bgcolor: 'background.paper',
    // bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

  };


  return (
    < >
      <input name='photos' aria-label='photosInput' type='hidden' value={photos}></input>
      <Box sx={{ gridArea: 'upload' }} data-testid="reviewsFormPhotoInputRoot">
        {photos.length < 5 && <Button variant="outlined" component="span" onClick={handleInnerOpen}  style={{color: '#000000', borderColor: '#000000'}} name="inputButton">
          Upload a Photo
        </Button>}
        <Modal
          open={open}
          onClose={handleInnerClose}
          aria-labelledby="add-a-photo"
          aria-describedby="modal-photo-form"
          className="innerModal"

        >
          <div>
            <FormPhotoModal
              handlePhotoUpload={handlePhotoUpload}
              handlePhotoDelete={handlePhotoDelete}
              photos={photos}
              handleInnerClose={handleInnerClose}
              onFileChange={onFileChange}
            />
          </div>
        </Modal >
      </Box>
      <Box sx={{ gridArea: 'photos' }} data-testid="reviewPhotoInputPhotos">
        {photos.length > 0 &&
          photos.map((photo, index) => (
            <img src={photo} alt="reviewer photo" className='thumbnailModal' key={index} onClick={(index) => { handlePhotoDelete(index) }} ></img>
          ))
        }
      </Box>


    </>
  );
}



export default FormPhotoInput;

