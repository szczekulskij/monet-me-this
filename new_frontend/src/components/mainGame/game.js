import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { StaticImage } from 'gatsby-plugin-image';

class Game extends React.Component {
  state = {
    showButtons: true,
    showMessage: false,
  };

  handleImageClick = (imageId) => {
    // Handle image click event
  };

  handleStartClick = () => {
    this.setState({ showButtons: false });
  };

  handleTutorialClick = () => {
    this.setState({ showMessage: true });
  };

  handleClose = () => {
    this.setState({ showMessage: false });
  };

  render() {
    const { showButtons, showMessage } = this.state;

    return (
      <Box
        style={{
          position: 'relative',
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
            filter: showButtons ? 'brightness(50%)' : 'none',
          }}
        >
          <StaticImage
            src="../images/profile_pic.png"
            alt="Image 1"
            // onClick={() => this.handleImageClick('image1')}
          />
          <StaticImage
            src="../images/profile_pic.png"
            alt="Image 2"
            // onClick={() => this.handleImageClick('image2')}
          />
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