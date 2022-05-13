import React from 'react';
import { graphql } from 'gatsby';

// const IndexPage = ({ data }) => {
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <main>
      <h1>Index Page</h1>
      <p>{data.allContentfulIndexPage.nodes[0].cafeHours}</p>
      <img
        src={data.allContentfulIndexPage.nodes[0].heroImageIndex.gatsbyImage.images.fallback.src}
        style={{
          width: 300,
          height: 'auto',
        }}
      />
    </main>
  );
};

export const data = graphql`
  {
    allContentfulIndexPage {
      nodes {
        heroImageIndex {
          gatsbyImage(layout: FULL_WIDTH, height: 100)
        }
        cafeHours
      }
    }
  }
`;

export default IndexPage;
