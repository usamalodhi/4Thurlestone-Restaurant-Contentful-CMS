import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const OpeningHours = () => {
  return (
    <Flex
      gridArea='BoxA'
      direction='column'
      alignItems='flex-start'
      justifyContent='center'
      border='2px solid red'
    >
      <Text as='p'>OPENING HOURS</Text>
      <Text as='p'>Mon-Sun 7am-5pm</Text>
      <Text as='p'>Fri-Sat 6pm-11pm</Text>
    </Flex>
  );
};

export default OpeningHours;
