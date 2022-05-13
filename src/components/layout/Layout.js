import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <Flex h='100vh' direction='column'>
      <Header />
      <Box as='main' flex='1' border='2px solid black'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
