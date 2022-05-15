import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

const IndexPage = ({ data }) => {
  const image = getImage(data.allContentfulIndexPage.nodes[0].heroImageIndex);
  const { cafeHours, restaurantHours } = data.allContentfulIndexPage.nodes[0];
  return (
    <BgImage style={{ minHeight: '100vh' }} image={image}>
      <main>
        <h1>{cafeHours}</h1>
        <h1>{restaurantHours}</h1>
      </main>
    </BgImage>
  );
};

export const data = graphql`
  {
    allContentfulIndexPage {
      nodes {
        cafeHours
        restaurantHours
        heroImageIndex {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export default IndexPage;
