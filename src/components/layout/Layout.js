import React from 'react';
import { Location } from '@reach/router';
import { Box, Flex, Text } from '@chakra-ui/react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Banner from '../banner/Banner';

const Layout = ({ children }) => {
  return (
    <Flex h='100vh' direction='column'>
      <Header />
      <Location>
        {({ location }) => {
          if (location.pathname !== '/') {
            return <Banner />;
          }
        }}
      </Location>
      <Box as='main' flex='1' border='2px solid black'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
