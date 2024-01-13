import { AppBar, Button, Hidden, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MobileNavigation from './mobileNavigation';

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
            to='/Portfolio' 
            color='inherit'
            className={classes.buttonHover}
          >
            Monet Painting Generator
          </Button>

          <Button 
            component={Link} 
            to='/Portfolio' 
            color='inherit'
            className={classes.buttonHover}
          >
            Choose Artist
          </Button>

          <Button 
            component={Link} 
            to='/Portfolio' 
            color='inherit'
            className={classes.buttonHover}
          >
            Choose Language
          </Button>

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