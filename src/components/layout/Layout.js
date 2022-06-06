import React from 'react';
// import { Location } from '@reach/router';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <Flex fontFamily='Poppins' fontWeight='normal' h='100vh' direction='column'>
      <Header />
      <Box as='main' flex='1'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
