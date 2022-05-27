import React from 'react';
import { Box, useMediaQuery, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import navLinks from '../../data/data';

const NavBar = ({ onClose }) => {
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
            <Link onClick={onClose} to={to}>
              <Text fontSize={{ base: '16px', sm: '20px' }} textAlign='right'>
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
