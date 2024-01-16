import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Generator = () => {
  const [images, setImages] = useState([
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200'
  ]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const url = URL.createObjectURL(acceptedFiles[0]);
      setImages([url, url]);
    }
  });

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" height="100vh">
      <Box display="flex" alignItems="center" justifyContent="center" gap="20px" marginTop="10%">
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