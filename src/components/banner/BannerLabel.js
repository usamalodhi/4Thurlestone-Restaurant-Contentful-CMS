import React from 'react';
import { Location } from '@reach/router';
import { Box } from '@chakra-ui/react';

const BannerLabel = () => {
  return (
    <Box border='2px solid white' height='min-content' padding='16px'>
      <Location>
        {({ location }) => {
          if (location.pathname === '/about') {
            return 'about';
          }
          if (location.pathname === '/menu') {
            return 'menu';
          }
          if (location.pathname === '/contact') {
            return 'contact';
          }
          if (location.pathname === '/blog') {
            return 'blog';
          }
        }}
      </Location>
    </Box>
  );
};

export default BannerLabel;
