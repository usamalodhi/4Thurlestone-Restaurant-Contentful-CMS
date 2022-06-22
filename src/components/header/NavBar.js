import React from 'react';
import { Box, useMediaQuery, ListItem, UnorderedList, Text, useStyleConfig } from '@chakra-ui/react';
import { Link } from 'gatsby';
import navLinks from '../../data/data';
import { motion } from 'framer-motion';

const NavBar = ({ onClose }) => {
  const styles = useStyleConfig('NavBar');

  const [isLargerThan630] = useMediaQuery('(min-width: 630px)');
  return (
    <Box as='nav'>
      <UnorderedList flexDirection={isLargerThan630 ? 'row' : 'column'} listStyleType='none' __css={styles}>
        {navLinks.map(({ id, to, label }) => (
          <ListItem key={id}>
            <Link onClick={onClose} to={to}>
              <Text
                as={motion.p}
                textStyle='siteLinks'
                whileHover={{ y: -5.0, color: '#FFFFFF', scale: 1.1 }}
                transition='0.1s linear'
              >
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
