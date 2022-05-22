import React from 'react';
import { Box, useMediaQuery, useStyleConfig } from '@chakra-ui/react';
import NavLinks from './NavBar';
import NavDrawer from './NavDrawer';
import Logo from './Logo';

const Header = () => {
  const styles = useStyleConfig('Header');

  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Box as='header' __css={styles}>
      <Logo />
      {isLargerThan600 ? <NavLinks /> : <NavDrawer />}
    </Box>
  );
};
export default Header;
