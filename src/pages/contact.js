import React from 'react';
// import { graphql } from 'gatsby';
import { Box, SimpleGrid } from '@chakra-ui/react';

const ContactPage = () => {
  // const imageMap = getImage(data.allContentfulContactPage.nodes[0].contactPageImageMap);
  return (
    <>
      <SimpleGrid minChildWidth='400px' spacingX='1em' spacingY='1em' mt='1em'>
        <Box border='2px solid black'>
          <iframe
            width='100%'
            height={600}
            src='https://maps.google.com/maps?q=Thurlestone%20Parade,%20Shepperton%20TW17%209AR&t=&z=13&ie=UTF8&iwloc=&output=embed'
          />
        </Box>

        <Box border='2px solid red'></Box>
      </SimpleGrid>
    </>
  );
};

// export const data = graphql`
//   {
//     allContentfulContactPage {
//       nodes {
//         contactPageImageMap {
//           gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//         }
//       }
//     }
//   }
// `;

export default ContactPage;
