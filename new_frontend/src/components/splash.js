import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import classnames from 'classnames';
import React, { Component } from 'react';
import GitHubIcon from '../assets/github.svg';
import MailIcon from '../assets/gmail.svg';
import InstagramIcon from '../assets/instagram.svg';
import LinkedIcon from '../assets/linkedin.svg';
import ResearchGateIcon from '../assets/research_gate.svg';

const styles = (theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginBottom: 50,
    marginTop: 50,
    width: '90%',
    maxWidth: 1280,
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
    textAlign: 'center',
  },
  picture: {
    margin: 'auto',
    width: 100,
    borderRadius: 100,
  },
  text: {
    color: 'white',
  },
  title: {
    fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '4rem',
    marginTop: 30,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: '1.5rem',
  },
  icons: {
    marginTop: 32,
  },
  icon: {
    width: 40,
    fill: '#fff',
    padding: '0 8px',
  },
});

class Splash extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
        </div>
      </div>
    );
  }
}

const Icon = ({ component, tooltip, analyticsEvent, ...props }) => (
  <Tooltip title={tooltip} interactive enterTouchDelay={0}>
    <a target='_blank' rel='noopener' data-umami-event={`${analyticsEvent}-social-hero`} {...props}>
      {component}
    </a>
  </Tooltip>
);

export default withStyles(styles)(Splash);
