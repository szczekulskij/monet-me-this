import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';
import React from 'react';

const useStyles = makeStyles((theme) => ({
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
    fontSize: '4rem',
    marginTop: 30,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: '1.5rem',
  },
}));

const Splash = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant='h1' className={classnames(classes.text, classes.title)}>
          Monet's History
        </Typography>
      </div>
    </div>
  );
};

export default Splash;
