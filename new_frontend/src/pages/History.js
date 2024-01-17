import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Monet1 from '../../../images/artists/monet/monet_jpg/0a5075d42a.jpg';
import Monet2 from '../../../images/artists/monet/monet_jpg/e291f8144f.jpg';
import Monet3 from '../../../images/artists/monet/monet_jpg/fb93438ff9.jpg';

const useStyles = makeStyles((theme) => ({
  section: {
    background: '#000', // Change background to black
    paddingTop: 50,
    paddingBottom: 24,
    boxShadow: theme.shadows[2],
  },
  containment: {
    contain: 'content',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  body: {
    color: '#ccc', // Change body text color to light gray
  },
  caption: {
    color: '#aaa', // Change caption color to dark gray
  },
  title: {
    color: '#fff', // Change title color to white
    marginTop: theme.spacing(4), // Add a top margin
  },
}));

const HistoryPage = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Seo title='History' />
      <Box className={classes.section}>
        <Container>
          <div className={classes.containment}>
          <Typography variant="h2" className={classes.title}>Claude Monet</Typography>
          <Typography variant="body1" className={classes.body}>
            Claude Monet was a key figure in the Impressionist movement that transformed French painting in the second half of the nineteenth century.
          </Typography>
            <Grid container spacing={3}>
              {[Monet1, Monet2, Monet3].map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      className={classes.media}
                      image={image}
                      title="Monet painting"
                    />
                    <CardContent>
                    <Typography variant="caption" color="textSecondary" component="p" className={classes.caption}>
                      Painting by Claude Monet
                    </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </Box>
    </Layout>
  );
};

export default HistoryPage;