import React from 'react';
import { Box, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import socialMediaIcons from '../../images';

const FollowSocial = () => {
  return (
    <Box as='nav' aria-label='Social Media Links'>
      <UnorderedList
        display='flex'
        // alignItems='center'
        justifyContent='space-between'
        w='100%'
        p='0px 0px 0px 0px'
        m='0px 0px 0px 0px'
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

export default FollowSocial;
