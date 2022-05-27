import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <Box>
      <Text fontSize={{ base: '20px', sm: '24px' }} fontWeight='bold' letterSpacing='0.313em'>
        <Link to='/'>4 THURLESTONE</Link>
      </Text>
    </Box>
  );
};

export default Logo;
