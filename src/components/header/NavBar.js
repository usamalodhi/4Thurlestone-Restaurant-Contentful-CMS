import React from 'react';
import { Flex, useMediaQuery, ListItem, UnorderedList } from '@chakra-ui/react';
import { Link } from 'gatsby';
import navLinks from '../../data/data';

const NavBar = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <>
      <UnorderedList listStyleType='none'>
        <Flex display='inline-flex' style={{ flexDirection: isLargerThan600 ? 'row' : 'column' }}>
          {navLinks.map(({ id, to, label }) => (
            <ListItem key={id}>
              <Link to={to}>{label}</Link>
            </ListItem>
          ))}
        </Flex>
      </UnorderedList>
    </>
  );
};
// nav
// nav__list
// nav__item
// nav__link

export default NavBar;
