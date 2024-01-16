import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Generator from '../components/generator/generator';

const useStyles = makeStyles((theme) => ({
  section: {
    background: '#fff',
    paddingTop: 24,
    paddingBottom: 24,
    boxShadow: theme.shadows[2],
  },
  aboutme: {
    fontWeight: 300,
    padding: '1rem 0',
    fontSize: '1.5rem',
  },
  subsectionTitle: {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 500,
  },
}));

const IndexPage = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout homepage>
      <Seo title='Game' />
      <Generator />
      
    </Layout>
  );
};

export const query = graphql`
  query {
    aboutme: file(name: { eq: "aboutme" }, sourceInstanceName: { eq: "content" }) {
      markdown: childMarkdownRemark {
        html
      }
    }
    timeline: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/timeline/" }
        internal: { type: { eq: "MarkdownRemark" } }
      }
      sort: { fields: frontmatter___order, order: DESC }
    ) {
      nodes {
        html
        frontmatter {
          title
          subtitle
          date
          iconName
          background
          foreground
          techstack
        }
      }
    }
  }
`;

export default IndexPage;