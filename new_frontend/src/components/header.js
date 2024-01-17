import { AppBar, Button, Hidden, Toolbar, Typography, useScrollTrigger, Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MobileNavigation from './mobileNavigation';
import BrushIcon from '@material-ui/icons/Brush'; // Import the icon you want to use
import FlagIcon from '@material-ui/icons/Flag'; // Import the icon you want to use

import englishFlag from '../images/english_flag.png'; // Replace with the actual path
import polishFlag from '../images/polish_flag.png'; // Replace with the actual path
import spanishFlag from '../images/spanish_flag.png'; // Replace with the actual path

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    transition: 'all 250ms',
  },
  rootSplash: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  buttonHover: {
    '&:hover': {
      backgroundColor: '#808080', // Change this to the color you want
    },
    borderRight: '2px solid #000', // Change this to the color you want
    textTransform: 'none',
  },
}));

const Header = ({ siteTitle, homepage }) => {
const classes = useStyles();
const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

const [artistAnchorEl, setArtistAnchorEl] = useState(null);
const [languageAnchorEl, setLanguageAnchorEl] = useState(null);

const handleArtistClick = (event) => {
  setArtistAnchorEl(event.currentTarget);
};

const handleArtistClose = () => {
  setArtistAnchorEl(null);
};

const handleLanguageClick = (event) => {
  setLanguageAnchorEl(event.currentTarget);
};

const handleLanguageClose = () => {
  setLanguageAnchorEl(null);
};

return (
    <AppBar className={classnames({ [classes.root]: true, [classes.rootSplash]: !trigger })}>
      <Toolbar>
        <MobileNavigation homepage={homepage} />
        <Typography
          variant='h6'
          component={homepage ? AnchorLink : Link}
          href='#top'
          to='/'
          className={classes.title}
        >
          {siteTitle}
        </Typography>
        <Hidden xsDown>
          <Button
            component={homepage ? AnchorLink : Link}
            offset='64'
            href='#top'
            to='/'
            color='inherit'
            className={classes.buttonHover}
          >
            Play
          </Button>

          <Button 
            component={Link} 
            to='/Portfolio' 
            color='inherit'
            className={classes.buttonHover}
          >
            Monet History
          </Button>

          <Button 
            component={Link} 
            to='/generator' 
            color='inherit'
            className={classes.buttonHover}
          >
            Monet Painting Generator
          </Button>

          <Button 
            aria-controls="artist-menu" 
            aria-haspopup="true" 
            onClick={handleArtistClick}
            color='inherit'
            className={classes.buttonHover}
          >
            <BrushIcon />
          </Button>
          <Menu
            id="artist-menu"
            anchorEl={artistAnchorEl}
            keepMounted
            open={Boolean(artistAnchorEl)}
            onClose={handleArtistClose}
          >
            <MenuItem onClick={handleArtistClose} component={Link} to='/Monet'>Monet</MenuItem>
            <MenuItem onClick={handleArtistClose} component={Link} to='/VanGogh'>Van Gogh</MenuItem>
            <MenuItem onClick={handleArtistClose} component={Link} to='/Picasso'>Picasso</MenuItem>
          </Menu>

          <Button 
            aria-controls="language-menu" 
            aria-haspopup="true" 
            onClick={handleLanguageClick}
            color='inherit'
            className={classes.buttonHover}
          >
            <FlagIcon />
          </Button>
          <Menu
            id="language-menu"
            anchorEl={languageAnchorEl}
            keepMounted
            open={Boolean(languageAnchorEl)}
            onClose={handleLanguageClose}
          >
            <MenuItem onClick={handleLanguageClose}>
              <ListItemIcon>
                <img src={englishFlag} alt="English" width="35" height="35"/> {/* Replace FlagIcon with the flag image for English */}
              </ListItemIcon>
              <ListItemText primary="English" />
            </MenuItem>
            <MenuItem onClick={handleLanguageClose}>
              <ListItemIcon>
                <img src={polishFlag} alt="Polish" width="35" height="35"/> {/* Replace FlagIcon with the flag image for Polish */}
              </ListItemIcon>
              <ListItemText primary="Polish" />
            </MenuItem>
            <MenuItem onClick={handleLanguageClose}>
              <ListItemIcon>
                <img src={spanishFlag} alt="Spanish" width="35" height="35"/> {/* Replace FlagIcon with the flag image for Spanish */}
              </ListItemIcon>
              <ListItemText primary="Spanish" />
            </MenuItem>
          </Menu>

        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;