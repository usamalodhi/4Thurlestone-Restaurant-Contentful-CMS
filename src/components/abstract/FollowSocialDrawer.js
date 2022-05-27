import React from 'react';
import { Box, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import socialMediaIcons from '../../images';

const FollowSocialDrawer = () => {
  return (
    <Box height='100%' as='nav' aria-label='Social Media Links'>
      <UnorderedList
        display='flex'
        flexDirection='column'
        alignItems='flex-end'
        justifyContent='space-evenly'
        height='100%'
        p='0px'
        m='0px'
        listStyleType='none'
        listStylePosition='none'
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
  );
};

export default FollowSocialDrawer;
