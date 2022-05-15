import React from 'react';
import { Text, Flex, Divider } from '@chakra-ui/react';

const NameAddress = () => {
  return (
    <Flex gridArea='BoxB' direction='column' alignItems='center' border='2px solid white'>
      <Text as='h2'>4 THURLESTONE</Text>
      <Divider w='80%' />
      <Text as='p'>4 Thurlestone Parade, Shepperton, TW17 9AR</Text>
    </Flex>
  );
};

export default NameAddress;
