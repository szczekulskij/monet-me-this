import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from '@material-ui/core/Typography';

class Game extends React.Component {
  state = {
    showButtons: true,
    showMessage: false,
    score: 0,
    showGuessOptions: false,
  };

  handleImageClick = () => {
    this.setState(prevState => ({ score: prevState.score + 1 }));
  };

  handleStartClick = () => {
    this.setState({ showGuessOptions: true });
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
    const { showButtons, showMessage, score, totalGuesses, showGuessOptions } = this.state;
  
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
        }}
      >
        <Box
          style={{
            display: 'flex',
            gap: '20px',
            filter: showButtons ? 'brightness(50%)' : 'none',
            width: '80%',
          }}
        >
          <div onClick={this.handleImageClick}>
            <StaticImage
              src="../../images/profile_pic.png"
              alt="Image 1"
              style={{ width: '100%' }}
            />
          </div>
          <div onClick={this.handleImageClick}>
            <StaticImage
              src="../../images/profile_pic.png"
              alt="Image 2"
              style={{ width: '100%' }}
            />
          </div>
        </Box>
        {!showButtons && (
          <Box style={{ 
            width: '80%', 
            height: '2px', 
            backgroundColor: 'grey', 
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ 
              width: `${scoreRatio * 100}%`, 
              height: '2px', 
              backgroundColor: scoreColor, 
              transition: 'width 2s ease' 
            }} />
            <Typography style={{ 
              position: 'absolute', 
              color: 'white', 
              fontSize: '12px',
            }}>
              {score}/{totalGuesses}
            </Typography>
          </Box>
        )}
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
        <Dialog open={showGuessOptions} onClose={this.handleClose}>
          <DialogTitle>Choose the number of guesses</DialogTitle>
          <DialogContent>
            <Button onClick={() => this.handleGuessOptionClick(10)}>10 guesses</Button>
            <Button onClick={() => this.handleGuessOptionClick(25)}>25 guesses</Button>
            <Button onClick={() => this.handleGuessOptionClick(50)}>50 guesses</Button>
          </DialogContent>
        </Dialog>
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