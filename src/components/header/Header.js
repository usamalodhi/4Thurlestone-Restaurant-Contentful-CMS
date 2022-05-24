import React from 'react';
import { background, Box, useMediaQuery, useStyleConfig } from '@chakra-ui/react';
import NavLinks from './NavBar';
import NavDrawer from './NavDrawer';
import Logo from './Logo';

const Header = () => {
  const styles = useStyleConfig('Header');

  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Box
      style={{
        zIndex: '10',
        width: '100%',
        position: 'fixed',
        top: '0',
      }}
      as='header'
      __css={styles}
    >
      <Logo />
      {isLargerThan600 ? <NavLinks /> : <NavDrawer />}
    </Box>
  );
};
export default Header;
