import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import beforeImage from '../../images/before.jpg';
import afterImage from '../../images/after.jpg';

const Generator = () => {
  const [images, setImages] = useState([beforeImage, afterImage]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const url = URL.createObjectURL(acceptedFiles[0]);
      setImages([url, url]);

      // Create a new FormData instance
      const data = new FormData();
      // Append the file to the form data
      data.append('image', acceptedFiles[0]);

      // Make a POST request to the backend
      fetch('http://127.0.0.1:5001/generate/image/monet', {
        method: 'POST',
        body: data
      })
      .then(response => response.blob())
      .then(blob => {
        // Create an object URL for the blob
        const objectURL = URL.createObjectURL(blob);
        // Update the second image with the response from the backend
        setImages([url, objectURL]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  });


  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" height="100vh">
      <Typography variant="h4" component="h1" gutterBottom style={{ color: 'white' }}>
        Generate your own Monete-sque painting!
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center" gap="20px" marginTop="5%">
        <img src={images[0]} alt="Image 1" width="300" height="200" />
        <ArrowForwardIcon fontSize="large" style={{ color: 'white', transform: 'scaleX(2)', margin: '0 10px' }} />
        <img src={images[1]} alt="Image 2" width="300" height="200" />
      </Box>
      <Box {...getRootProps()} padding="20px" border="1px dashed gray" marginTop="20px">
        <input {...getInputProps()} />
        <Button variant="contained" color="primary">
          Click to upload image
        </Button>
      </Box>
    </Box>
  );
};

export default Generator;