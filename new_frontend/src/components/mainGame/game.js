import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from '@material-ui/core/Typography';

class Game extends React.Component {
  state = {
    // buttons and messages related
    showButtons: true,
    showMessage: false,
    score: 0,
    showGuessOptions: false,

    // game state related
    original: null,
    generated: null,
    gameOver: false,
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    try {
      const originalResponse = await axios.get('http://localhost:8080/images/monet/original', {responseType: 'blob'});
      const generatedResponse = await axios.get('http://localhost:8080/images/monet/generated', {responseType: 'blob'});

      const original_image_url = await URL.createObjectURL(originalResponse.data)
      const generated_image_url = await URL.createObjectURL(generatedResponse.data)

      this.setState({ original: original_image_url, generated: generated_image_url });
      console.log(originalResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  handleImageClick = (image) => {
    if (image === this.state.original) {
      this.setState(prevState => ({ score: prevState.score + 1 }));
    }
    this.setState(prevState => ({ totalGuesses: prevState.totalGuesses + 1 }), this.checkGameOver);
  };
  
  checkGameOver = () => {
    if (this.state.totalGuesses === 10) {
      this.setState({ gameOver: true });
    } else {
      this.fetchImages();
    }
  };
  
  handleStartClick = () => {
    this.setState({ showButtons: false, showGuessOptions: true });
  };
  
  handleGuessOptionClick = (guesses) => {
    this.setState({ showButtons: false, totalGuesses: guesses, showGuessOptions: false });
  };
  
  handleTutorialClick = () => {
    this.setState({ showMessage: true });
  };
  
  handleClose = () => {
    this.setState({ showMessage: false });
  };

  render() {
    const { showButtons, showMessage, score, totalGuesses, showGuessOptions , original, generated, gameOver} = this.state;

    if (gameOver) {
      let message;
      if (score > 7) {
        message = 'Great job!';
      } else if (score > 4) {
        message = 'Good job!';
      } else {
        message = 'Better luck next time!';
      }
      return <div>{message}</div>;
    }
  
    const scoreRatio = score / totalGuesses;
    const scoreColor = scoreRatio > 0.5 ? 'green' : scoreRatio > 0.25 ? 'orange' : 'red';
  
    return (
      <Box
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: '20px',
          marginTop: '30px', // Decrease the top margin to shift everything up
        }}
      >
        <Box
          style={{
            display: 'flex',
            gap: '20px',
            filter: showButtons ? 'brightness(50%)' : 'none',
            width: '80%', // Increase the width to make the images bigger
          }}
        >
          <div style={{ flex: 1 }} onClick={this.handleImageClick}>
            <img
              src={original} 
              alt="Original" 
              onClick={() => this.handleImageClick('original')}
              style={{ width: '100%', height: 'auto' }} // Set a specific width and height
            />
          </div>
          <div style={{ flex: 1 }} onClick={this.handleImageClick}>
            <img
              src={generated} 
              alt="Generated" 
              onClick={() => this.handleImageClick('generated')}
              style={{ width: '100%', height: 'auto' }} // Set a specific width and height
            />
          </div>
        </Box>
        <Box style={{ 
          width: '80%', // Increase the width to make the horizontal line bigger
          height: '6px', // Increase the height to make the line thicker
          backgroundColor: 'grey', 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          marginTop: '20px', // Reserve space for the horizontal line
        }}>
          {!showButtons && (
            <div style={{ 
              width: `${scoreRatio * 100}%`, 
              height: '6px', // Increase the height to make the line thicker
              backgroundColor: scoreColor, 
              transition: 'width 2s ease' 
            }} />
          )}
          <Typography style={{ 
            position: 'absolute', 
            color: 'white', 
            fontSize: '12px',
            right: '0', // Position the number on the right
          }}>
            {score}/{totalGuesses}
          </Typography>
        </Box>
        {showButtons && (
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Button variant="contained" color="primary" size="large" onClick={this.handleStartClick}>
              Start
            </Button>
            <Button variant="contained" color="secondary" size="large" onClick={this.handleTutorialClick}>
              Tutorial
            </Button>
          </Box>
        )}
        {showGuessOptions && (
          <Box
            style={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              backgroundColor: '#f5f5f5', // Change the background color of the popup
              border: '2px solid #333', // Add a border to the popup
              borderRadius: '10px', // Add rounded corners to the popup
              padding: '20px', // Add some padding to the popup
            }}
          >
            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Choose the number of guesses
            </Typography>
            <Button 
              variant="contained" 
              onClick={() => this.handleGuessOptionClick(10)}
              style={{
                backgroundColor: '#4caf50', // Change the background color of the button
                '&:hover': {
                  backgroundColor: '#388e3c', // Change the hover color of the button
                },
              }}
            >
              10 guesses
            </Button>
            <Button 
              variant="contained" 
              onClick={() => this.handleGuessOptionClick(25)}
              style={{
                backgroundColor: '#ff9800', // Change the background color of the button
                '&:hover': {
                  backgroundColor: '#f57c00', // Change the hover color of the button
                },
              }}
            >
              25 guesses
            </Button>
            <Button 
              variant="contained" 
              onClick={() => this.handleGuessOptionClick(50)}
              style={{
                backgroundColor: '#f44336', // Change the background color of the button
                '&:hover': {
                  backgroundColor: '#d32f2f', // Change the hover color of the button
                },
              }}
            >
              50 guesses
            </Button>
          </Box>
        )}
        <Dialog open={showMessage} onClose={this.handleClose}>
          <DialogTitle>{"Tutorial"}</DialogTitle>
          <DialogContent>
            <p>Hello there, General Kenobi</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }
}

export default Game;