import React from 'react';
import { Box, UnorderedList, ListItem, Flex, Image } from '@chakra-ui/react';
import socialMediaIcons from '../../images';

// import { Flex, useMediaQuery, ListItem, UnorderedList } from '@chakra-ui/react';
// import { Link } from 'gatsby';
// import navLinks from '../../data/data';

// const NavBar = () => {
//   const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
//   return (
//     <>
//       <UnorderedList listStyleType='none'>
//         <Flex display='inline-flex' style={{ flexDirection: isLargerThan600 ? 'row' : 'column' }}></Flex>

const FollowSocial = () => {
  return (
    <Flex
      gridArea='BoxC'
      alignItems='center'
      // justifyContent={['flex-end', 'center']}
      justifyContent='flex-end'
      border='2px solid green'
    >
      <Box as='nav' aria-label='Social Media Links'>
        <UnorderedList
          display='flex'
          justifyContent='flex-end'
          columnGap='1em'
          listStyleType='none'
        >
          {socialMediaIcons.map(({ id, url, icon, alt }) => (
            <ListItem key={id}>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                <Image src={icon} alt={alt} width='24px' height='24px' />
              </a>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default FollowSocial;
