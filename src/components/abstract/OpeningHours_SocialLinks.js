import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import FollowSocial from './FollowSocial';

const OpeningHoursSocialLinks = () => {
  return (
    <Flex direction='column'>
      <Text as='h2'>OPENING HOURS</Text>
      <Text as='p'>Monday-Sunday 7am-5pm</Text>
      <Text as='p'>Friday-Saturday 6pm-11pm</Text>
      <FollowSocial />
    </Flex>
  );
};

export default OpeningHoursSocialLinks;
