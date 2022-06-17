import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ContactDetails = () => {
  return (
    <>
      <Box as='address' pb='24px' fontStyle='normal'>
        <Text as='h2'>ADDRESS</Text>
        <Text as='p'>4 THURLESTONE</Text>
        <Text as='p'>4 Thurlestone Parade</Text>
        <Text as='p'>Shepperton</Text>
        <Text as='p'>TW17 9AR</Text>
        <Text as='p'>01932 558886</Text>
      </Box>

      <Box pb='24px'>
        <Text as='h2'>PRESS ENQUIRIES</Text>
        <Text as='p'>
          For all press enquiries please contact the restaurant at 01932 558886 and speak to Sokol or leave him a
          message.
        </Text>
      </Box>

      <Box pb='24px'>
        <Text as='h2'>CAREERS</Text>
        <Text as='p'>
          Want to work with us? Enquire about opportunities directly by visiting the restaurant with your CV and speak
          to Sokol directly or contact our staff to discuss.
        </Text>
      </Box>

      <Box pb='24px'>
        <Text as='h2'>EVENTS</Text>
        <Text as='p'>
          4 Thurlestone will provide great food and service with a celebratory atmosphere whatever the occasion. For
          more information on hosting at our venue please contact our Team on 01932 558886.
        </Text>
      </Box>
    </>
  );
};

export default ContactDetails;
