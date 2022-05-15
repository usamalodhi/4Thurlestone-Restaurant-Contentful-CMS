import React from 'react';
import { Location } from '@reach/router';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BannerBox from '../banner/BannerBox';

const Layout = ({ children }) => {
  return (
    <Flex h='100vh' direction='column'>
      <Header />
      <Location>
        {({ location }) => {
          if (location.pathname !== '/') {
            return <BannerBox />;
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
