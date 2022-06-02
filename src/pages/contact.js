import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <>
      <SimpleGrid minChildWidth='400px' spacingX='1em' spacingY='1em' mt='1em'>
        <Box>
          <iframe
            title='google maps embed of 4Thurlestone'
            width='100%'
            height={600}
            src='https://maps.google.com/maps?q=Thurlestone%20Parade,%20Shepperton%20TW17%209AR&t=&z=13&ie=UTF8&iwloc=&output=embed'
            style={{
              WebkitFilter: 'grayscale(100%)',
              filter: 'grayscale(100%)',
              mapTypeControl: false,
              streetViewControl: false,
              panControl: false,
              rotateControl: false,
              zoomControl: false,
            }}
          />
        </Box>
        <Box>
          <Text>01932 558886</Text>
          <Text>ADDRESS</Text>
          <Text as='address'>
            <Text>4 THURLESTONE</Text>
            <Text>4 Thurlestone Parade</Text>
            <Text>Shepperton</Text>
            <Text>TW17 9AR</Text>
            <Text>PRESS ENQUIRIES</Text>
            <Text>For all press enquiries please contact Sokol directly at XXXX </Text>
            <Text>CAREERS</Text>
            <Text>
              Want to work with us? Enquire about opportunities directly by visiting the restaurant
              with your CV and speak to Sokol directly or contact our staff to discuss
            </Text>
            <Text>EVENTS</Text>
            <Text>
              4 Thurlestone will provide great food and service with a celebratory atmosphere
              whatever the occasion. For more information on hosting at our venue please contact our
              Team on +44 (0) 207 201 3844.
            </Text>
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default ContactPage;
