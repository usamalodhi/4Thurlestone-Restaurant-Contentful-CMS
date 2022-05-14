import React from 'react';
import { Location } from '@reach/router';
import { Box, Flex, Center } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Flex color='white'>
      <Center w='100vw' h='50vh' bg='green.500'>
        <Box>
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
      </Center>
    </Flex>
  );
};

export default Banner;
