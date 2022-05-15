import React from 'react';
import { Box, useMediaQuery, Flex } from '@chakra-ui/react';
import NavLinks from './NavBar';
import NavDrawer from './NavDrawer';

import Logo from './Logo';

const Header = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Flex
      background='#232221'
      color='white'
      alignItems='center'
      justifyContent='space-between'
      as='header'
    >
      <Box>
        <Logo />
      </Box>
      <Box>{isLargerThan600 ? <NavLinks /> : <NavDrawer />}</Box>
    </Flex>
  );
};
export default Header;
