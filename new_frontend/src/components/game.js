import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class Game extends React.Component {
  handleImageClick = (imageId) => {
    // Handle image click event
  };

  handleStartClick = () => {
    // Handle start button click event
  };

  handleTutorialClick = () => {
    // Handle tutorial button click event
  };

  render() {
    return (
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: '20px',
        }}
      >
        <Box
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <img
            src="image1.jpg"
            alt="Image 1"
            onClick={() => this.handleImageClick('image1')}
          />
          <img
            src="image2.jpg"
            alt="Image 2"
            onClick={() => this.handleImageClick('image2')}
          />
        </Box>
        <Button variant="contained" onClick={this.handleStartClick}>
          Start
        </Button>
        <Button variant="contained" onClick={this.handleTutorialClick}>
          Tutorial
        </Button>
      </Box>
    );
  }
}

export default Game;
