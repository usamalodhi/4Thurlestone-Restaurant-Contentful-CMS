import React from 'react';
import { graphql } from 'gatsby';
import { Box, SimpleGrid } from '@chakra-ui/react';
import BannerBox from '../components/banner/BannerBox';
import GoogleMap from '../components/googlemap/GoogleMap';
import ContactDetails from '../components/contactdetails/ContactDetails';

const ContactPage = ({ data }) => {
  return (
    <>
      <BannerBox
        bannerImage={data.allContentfulContactPage.nodes[0].bannerImage}
        altText={'Contact 4 Thurelstone, for those in search of location, direction, or general and business enquiries'}
        bannerLabel={'contact'}
      />
      <SimpleGrid minChildWidth='400px' spacingX='24px' spacingY='24px'>
        <Box>
          <GoogleMap />
        </Box>
        <Box padding='24px'>
          <ContactDetails />
        </Box>
      </SimpleGrid>
    </>
  );
};

export const data = graphql`
  {
    allContentfulContactPage {
      nodes {
        bannerImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export default ContactPage;
