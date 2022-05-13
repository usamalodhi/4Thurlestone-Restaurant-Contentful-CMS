import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Flex h='100vh' direction='column'>
      <Box as='header' h='100px' border='2px solid black'>
        Header
      </Box>
      <Box as='main' flex='1' border='2px solid black'>
        {children}
      </Box>
      <Box as='footer' h='100px' border='2px solid black'>
        Footer
      </Box>
    </Flex>
  );
};

export default Layout;
