import React from 'react';
import { Box, useMediaQuery, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import navLinks from '../../data/data';

const NavBar = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Box as='nav'>
      <UnorderedList
        display='inline-flex'
        columnGap='24px'
        rowGap='24px'
        flexDirection={isLargerThan600 ? 'row' : 'column'}
        listStyleType='none'
      >
        {navLinks.map(({ id, to, label }) => (
          <ListItem key={id}>
            <Link to={to}>
              <Text textAlign='right' letterSpacing='0.1rem'>
                {label}
              </Text>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default NavBar;
