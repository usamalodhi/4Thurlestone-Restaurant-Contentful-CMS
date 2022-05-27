import React from 'react';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { Flex, Center } from '@chakra-ui/react';
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
      allContentfulMenuPage {
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

  const location = useLocation();
  const aboutBannerImage = getImage(data.allContentfulAboutPage.nodes[0].bannerImage);
  const menuBannerImage = getImage(data.allContentfulMenuPage.nodes[0].bannerImage);
  const contactBannerImage = getImage(data.allContentfulContactPage.nodes[0].bannerImage);
  const blogBannerImage = getImage(data.allContentfulBlogPage.nodes[0].bannerImage);

  const switchBannerImage = () => {
    switch (location.pathname) {
      case '/about':
        return aboutBannerImage;
      case '/menu':
        return menuBannerImage;
      case '/contact':
        return contactBannerImage;
      case '/blog':
        return blogBannerImage;
      default:
        console.log('error - BannerBox Image');
    }
  };

  const switchBannerImageAlt = () => {
    switch (location.pathname) {
      case '/about':
        return 'About 4 Thurelstone, Thurlestone Parade, Shepperton';
      case '/menu':
        return 'Menu 4 Thurelstone, Taking inspiration from British and European cultures as well as local favourites';
      case '/contact':
        return 'Contact 4 Thurelstone, for those in search of location, direction, or general and business enquiries';
      case '/blog':
        return 'Blog 4 Thurelstone, read our latest news and announcements';
      default:
        console.log('error - BannerBox Image');
    }
  };

  return (
    <BgImage image={switchBannerImage()} alt={switchBannerImageAlt()}>
      <Flex backgroundColor='rgba(0,0,0,0.5)' h='100vh'>
        <Center
          as='h1'
          textStyle='homePageTitle'
          layerStyle='homePageTitle'
          h='100vh'
          margin='0 auto'
        >
          <BannerLabel />
        </Center>
      </Flex>
    </BgImage>
  );
};

export default BannerBox;
