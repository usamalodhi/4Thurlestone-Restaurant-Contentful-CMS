import React from 'react';
// import { useLocation } from '@reach/router';
// import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { Flex, Box, Center } from '@chakra-ui/react';

const BannerBox = ({ bannerImage, altText, bannerLabel }) => {
  return (
    <BgImage image={getImage(bannerImage)} alt={altText}>
      <Flex backgroundColor='rgba(0,0,0,0.5)' h='100vh'>
        <Center
          as='h1'
          textStyle='homePageTitle'
          layerStyle='homePageTitle'
          h='100vh'
          margin='0 auto'
        >
          <Box border='2px solid white' height='min-content' padding='16px'>
            {bannerLabel}
          </Box>
        </Center>
      </Flex>
    </BgImage>
  );
};

export default BannerBox;
