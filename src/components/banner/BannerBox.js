// location.pathname === '/about';
// location.pathname === '/menu';
// location.pathname === '/contact';
// location.pathname === '/blog';

import React from 'react';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { Box, Flex, Center } from '@chakra-ui/react';
import BannerLabel from './BannerLabel';

const BannerBox = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulAboutPage {
        nodes {
          bannerImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      allContentfulContactPage {
        nodes {
          bannerImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      allContentfulBlogPage {
        nodes {
          bannerImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  console.log('here', data);

  const location = useLocation();
  const aboutBannerImage = getImage(data.allContentfulAboutPage.nodes[0].bannerImage);
  // const menuBannerImage = getImage(data.allContentfulMenuPage.nodes[0].bannerImage);
  const contactBannerImage = getImage(data.allContentfulContactPage.nodes[0].bannerImage);
  const blogBannerImage = getImage(data.allContentfulBlogPage.nodes[0].bannerImage);

  const switchBannerImage = () => {
    switch (location.pathname) {
      case '/about':
        return aboutBannerImage;
      // case '/menu':
      //   return menuBannerImage;
      case '/contact':
        return contactBannerImage;
      case '/blog':
        return blogBannerImage;
      default:
        console.log('error - BannerBox Image');
    }
  };

  return (
    <BgImage image={switchBannerImage()} alt='test'>
      <Flex color='white'>
        <Center w='100vw' h='50vh'>
          <Box>
            <BannerLabel />
          </Box>
        </Center>
      </Flex>
    </BgImage>
  );
};

export default BannerBox;
