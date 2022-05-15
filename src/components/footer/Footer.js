import React from 'react';
import { Box, Grid, Flex } from '@chakra-ui/react';
import FollowSocial from '../abstract/FollowSocial';
import OpeningHours from '../abstract/OpeningHours';
import Name_Address from '../abstract/Name_Address';

const Footer = () => {
  return (
    <Grid
      background='#272625'
      color='white'
      as='footer'
      gridTemplateColumns={{
        base: '1fr 1fr 1fr',
        sm: '1fr 1fr 1fr',
      }}
      gridTemplateRows={{
        base: 'min-content',
        sm: 'min-content',
      }}
      gridTemplateAreas={{
        base: `'BoxA BoxB BoxC'`,
        sm: `'BoxA BoxB BoxC'`,
      }}
    >
      <OpeningHours />
      <Name_Address />
      <FollowSocial />
    </Grid>
  );
};

export default Footer;
