import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <Box as='header' h='100px' border='2px solid black'>
      <Box>Logo</Box>
      <Box as='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/blog'>Blog</Link>
      </Box>
    </Box>
  );
};

export default Header;
