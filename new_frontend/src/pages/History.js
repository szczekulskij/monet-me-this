import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import History from '../components/history/history';
import Splash from '../components/history/splash';
import Seo from '../components/seo';

const useStyles = makeStyles((theme) => ({
  section: {
    background: theme.palette.background.default,
    paddingTop: 50,
    paddingBottom: 24,
    boxShadow: theme.shadows[2],
  },
  containment: {
    contain: 'content',
  },
}));

const HistoryPage = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Seo title='History' />
      <Splash />
      <Box className={classes.section}>
        <Container>
          <div className={classes.containment}>
            <History/>
          </div>
        </Container>
      </Box>
    </Layout>
  );
};

export default HistoryPage;