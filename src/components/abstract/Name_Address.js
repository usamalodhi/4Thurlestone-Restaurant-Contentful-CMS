import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

const NameAddress = () => {
  return (
    <Flex
      as='address'
      gridArea='BoxB'
      direction='column'
      alignItems='center'
      justifyContent='center'
      border='2px solid blue'
    >
      <Text as='h2'>4 THURLESTONE</Text>
      <Text as='p'>4 Thurlestone Parade, Shepperton, TW17 9AR</Text>
    </Flex>
  );
};

export default NameAddress;
