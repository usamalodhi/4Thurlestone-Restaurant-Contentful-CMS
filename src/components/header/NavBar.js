import React from 'react';
import { Box, useMediaQuery, ListItem, UnorderedList, Text, useStyleConfig } from '@chakra-ui/react';
import { Link } from 'gatsby';
import navLinks from '../../data/data';
import { motion } from 'framer-motion';

const NavBar = ({ onClose }) => {
  const styles = useStyleConfig('NavBar');

  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Box as='nav'>
      <UnorderedList flexDirection={isLargerThan600 ? 'row' : 'column'} __css={styles}>
        {navLinks.map(({ id, to, label }) => (
          <ListItem key={id}>
            <Link onClick={onClose} to={to}>
              <Text
                as={motion.p}
                whileHover={{ y: -5.0, color: '#FFFFFF', scale: 1.1 }}
                transition='0.1s linear'
                fontSize={{ base: '16px', sm: '20px' }}
                textAlign='right'
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
