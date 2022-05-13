import React from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import NavLinks from './NavLinks';
import NavDrawer from './NavAccordian';

import Logo from './Logo';

const Header = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box as='header' h='100px' border='2px solid black'>
      <Logo />
      {isLargerThan600 ? <NavLinks /> : <NavDrawer />}
    </Box>
  );
};

export default Header;
