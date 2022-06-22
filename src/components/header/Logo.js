import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <Box>
      <Text textStyle='Logo'>
        <Link to='/'>4 THURLESTONE</Link>
      </Text>
    </Box>
  );
};

export default Logo;
