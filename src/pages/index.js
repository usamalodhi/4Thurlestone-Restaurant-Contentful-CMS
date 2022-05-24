import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { Box, Text, useStyleConfig } from '@chakra-ui/react';

const IndexPage = ({ data }) => {
  const styles = useStyleConfig('IndexPageHero');
  const image = getImage(data.allContentfulIndexPage.nodes[0].heroImageIndex);
  return (
    <BgImage style={{ minHeight: '100vh' }} image={image}>
      <Box __css={styles}>
        <Text as='h1' textStyle='homePageTitle' layerStyle='homePageTitle'>
          4 Thurlestone
        </Text>
      </Box>
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
