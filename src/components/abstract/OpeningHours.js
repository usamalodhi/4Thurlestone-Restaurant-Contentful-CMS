import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const OpeningHours = () => {
  return (
    <Flex gridArea='BoxA' direction='column' alignItems='flex-start' border='2px solid orange'>
      <Text as='p'>Cafe: Daily 7am-5pm</Text>
      <Text as='p'>Restaurant: Fri/Sat 6pm-11pm</Text>
    </Flex>
  );
};

export default OpeningHours;
