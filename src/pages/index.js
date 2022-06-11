import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { Box, Text, Flex } from '@chakra-ui/react';

const IndexPage = ({ data }) => {
  // const styles = useStyleConfig('IndexPageHero');
  // __css={styles}

  const { restaurantTitle, heroSloganTwo } = data.allContentfulIndexPage.nodes[0];
  const heroSloganOne = data.allContentfulIndexPage.nodes[0].heroSloganOne;
  const image = getImage(data.allContentfulIndexPage.nodes[0].heroImageIndex);

  return (
    <>
      <BgImage style={{ height: '100vh', backgroundImage: 'contain' }} image={image}>
        <Flex backgroundColor='rgba(0,0,0,0.5)' h='100vh'>
          <Flex direction='column' border='2px solid white' height='min-content' padding='16px' margin='auto auto'>
            <Box>
              <Text as='h2' textStyle='homePageInfo' layerStyle='homePageTitle'>
                {heroSloganOne}
              </Text>
            </Box>
            <Box>
              <Text as='h1' textStyle='homePageTitle' layerStyle='homePageTitle'>
                {restaurantTitle}
              </Text>
            </Box>
            <Box>
              <Text as='h2' textStyle='homePageInfo' layerStyle='homePageTitle'>
                {heroSloganTwo}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </BgImage>
    </>
  );
};

export const data = graphql`
  {
    allContentfulIndexPage {
      nodes {
        heroSloganOne
        restaurantTitle
        heroSloganTwo
        heroImageIndex {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export default IndexPage;
