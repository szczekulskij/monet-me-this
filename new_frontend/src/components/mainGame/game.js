import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

class Game extends React.Component {
  state = {
    // buttons and messages related
    showButtons: true,
    showMessage: false,
    score: 0,
    showGuessOptions: false,

    // game state related
    image1: null,
    image2: null,
    correct_image_nr: null,
    gameOver: false,
    totalGuessesSoFar: 0,
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

      if (Math.random() < 0.5) {
        this.setState({ image1: original_image_url, image2: generated_image_url, correct_image_nr: "1"});
      }
      else {
        this.setState({ image1: generated_image_url, image2: original_image_url, correct_image_nr: "2"});
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  handleImageClick = (image_nr) => {
    // Check if the game has started
    if (!this.state.showButtons && !this.state.showGuessOptions) {
      const isGuessCorrect = image_nr == this.state.correct_image_nr;
      this.setState({ selectedImage: image_nr, isGuessCorrect });
  
      if (isGuessCorrect) {
        this.setState(prevState => ({ score: prevState.score + 1 }));
      }
      this.setState(prevState => ({ totalGuessesSoFar: prevState.totalGuessesSoFar + 1 }), this.checkGameOver);
  
      // Clear the selected image state after 1 second
      // setTimeout(() => this.setState({ selectedImage: null }), 1000);
      setTimeout(() => this.setState({ selectedImage: null }), 200);
  
      this.fetchImages();
    }
  };
  
  checkGameOver = () => {
    if (this.state.totalGuessesSoFar === this.state.totalGuesses) {
      this.setState({ gameOver: true });
      console.log("Game over!")
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

  handleTryAgainClick = () => {
    this.setState({
      showButtons: true,
      gameOver: false,
      score: 0,
      totalGuessesSoFar: 0,
    });
  };

  render() {
    const { showButtons, showMessage, score, totalGuesses, showGuessOptions , image1, image2, gameOver} = this.state;

    const MESSAGES = {
      "great" : "Woooah. You are amazing at this, with you in this world AI doesn't seem so terrifying anymore.",
      "medium" : "Well done. This a great score - but I know you can do better. Wanna try again ?",
      "bad" : "You make me feel proud (of AI). Please try again, I'm sure you can do better!"
  }
  
    const scoreRatio = score / totalGuesses;
    const scoreColor = scoreRatio > 0.5 ? 'green' : scoreRatio > 0.25 ? 'orange' : 'red';

    let message;
    if (scoreRatio > 0.8) {
      message = MESSAGES["great"];
    } else if (scoreRatio > 0.5) {
      message = MESSAGES["medium"];
    } else {
      message = MESSAGES["bad"];
    }
  
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
          <div style={{ flex: 1 }} >
            <img
              src={image1} 
              alt="Original" 
              onClick={() => this.handleImageClick('1')}
              style={{ width: '100%', height: 'auto' }} // Set a specific width and height
              className={this.state.selectedImage === '1' ? (this.state.isGuessCorrect ? 'correct-guess' : 'incorrect-guess') : ''}
            />
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={image2} 
              alt="Generated" 
              onClick={() => this.handleImageClick('2')}
              style={{ width: '100%', height: 'auto' }} // Set a specific width and height
              className={this.state.selectedImage === '2' ? (this.state.isGuessCorrect ? 'correct-guess' : 'incorrect-guess') : ''}
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
            <p>Hi there! Let's play a guessing game. Your aim is to guess which of the picture has been painted by monet, and which one has been generated by AI. Press "start", to start the game, then choose nr of rounds. You can guess by clicking on the image!</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={gameOver} onClose={this.handleTryAgainClick}>
        <DialogTitle>{"Game Over"}</DialogTitle>
        <DialogContent>
          <Typography>{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleTryAgainClick} color="primary">
            Try Again
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
    );
  }
}

export default Game;