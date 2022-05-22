import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

const NameAddress = () => {
  return (
    <Flex as='address' direction='column' fontStyle='normal'>
      <Text as='h2'>4 THURLESTONE</Text>
      <Text as='p'>Thurlestone Parade</Text>
      <Text as='p'>Shepperton</Text>
      <Text as='p'>TW17 9AR</Text>
    </Flex>
  );
};

export default NameAddress;
