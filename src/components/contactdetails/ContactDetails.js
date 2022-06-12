import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ContactDetails = () => {
  return (
    <>
      <Box as='address' pb='24px'>
        <Text as='h2' fontSize='1.5rem'>
          ADDRESS
        </Text>
        <Text as='p' fontSize='1rem'>
          4 THURLESTONE
        </Text>
        <Text as='p' fontSize='1rem'>
          4 Thurlestone Parade
        </Text>
        <Text as='p' fontSize='1rem'>
          Shepperton
        </Text>
        <Text as='p' fontSize='1rem'>
          TW17 9AR
        </Text>
        <Text as='p' fontSize='1rem'>
          01932 558886
        </Text>
      </Box>

      <Box pb='24px'>
        <Text as='h2' fontSize='1.5rem'>
          PRESS ENQUIRIES
        </Text>
        <Text as='p'>For all press enquiries please contact Sokol directly at XXXX </Text>
      </Box>

      <Box pb='24px'>
        <Text as='h2' fontSize='1.5rem'>
          CAREERS
        </Text>
        <Text as='p'>
          Want to work with us? Enquire about opportunities directly by visiting the restaurant with your CV and speak
          to Sokol directly or contact our staff to discuss
        </Text>
      </Box>

      <Box pb='24px'>
        <Text as='h2' fontSize='1.5rem'>
          EVENTS
        </Text>
        <Text as='p'>
          4 Thurlestone will provide great food and service with a celebratory atmosphere whatever the occasion. For
          more information on hosting at our venue please contact our Team on +44 (0) 207 201 3844.
        </Text>
      </Box>
    </>
  );
};

export default ContactDetails;
