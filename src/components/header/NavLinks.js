import React from 'react';
import { Box, Flex, useMediaQuery, ListItem, UnorderedList } from '@chakra-ui/react';
import { Link } from 'gatsby';

const NavLinks = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Box as='nav'>
      <UnorderedList listStyleType='none'>
        <Flex style={{ flexDirection: isLargerThan600 ? 'row' : 'column' }}>
          <ListItem>
            <Link to='/'>Home</Link>
          </ListItem>
          <ListItem>
            <Link to='/about'>About</Link>
          </ListItem>
          <ListItem>
            <Link to='/menu'>Menu</Link>
          </ListItem>
          <ListItem>
            <Link to='/contact'>Contact</Link>
          </ListItem>
          <ListItem>
            <Link to='/blog'>Blog</Link>
          </ListItem>
        </Flex>
      </UnorderedList>
    </Box>
  );
};
// nav
// nav__list
// nav__item
// nav__link

export default NavLinks;
