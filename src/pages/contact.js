import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <>
      <SimpleGrid minChildWidth='400px' spacingX='1em' spacingY='1em' mt='1em'>
        <Box border='2px solid black'>
          <iframe
            title='google maps embed of 4Thurlestone'
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

export default ContactPage;
