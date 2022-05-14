import React from 'react';
import { Box, Text, UnorderedList, ListItem, Flex, Image } from '@chakra-ui/react';
import socialMediaIcons from '../../images';

const Footer = () => {
  return (
    <Box as='footer' border='2px solid orange'>
      <Box border='1px solid blue'>
        <Text as='p'>Cafe: Daily 7am-5pm</Text>
        <Text as='p'>Restaurant: Fri/Sat 6pm-11pm</Text>
      </Box>
      <Box>
        <Text as='h2'>4 Thurlestone</Text>
        <Text as='p'>4 Thurlestone Parade, Shepperton, TW17 9AR</Text>
      </Box>
      <Box>
        <Box>
          <Text>Follow Us</Text>
        </Box>
        <Box background='black' as='nav' aria-label='Social Media Links'>
          <UnorderedList listStyleType='none'>
            <Flex direction='row'>
              {socialMediaIcons.map(({ id, icon, url }) => (
                <ListItem key={id}>
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    <Image src={icon} />
                  </a>
                </ListItem>
              ))}
            </Flex>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
