import React from 'react';
import { Box, UnorderedList, ListItem, Flex, Image } from '@chakra-ui/react';
import socialMediaIcons from '../../images';

const FollowSocial = () => {
  return (
    <Flex gridArea='BoxC' alignItems='center'>
      <Box w='100%' as='nav' aria-label='Social Media Links' border='2px solid blue'>
        <UnorderedList listStyleType='none'>
          <Flex justifyContent='flex-end' columnGap='1em'>
            {socialMediaIcons.map(({ id, url, icon, alt }) => (
              <ListItem key={id}>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  <Image src={icon} alt={alt} width='20px' height='20px' />
                </a>
              </ListItem>
            ))}
          </Flex>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default FollowSocial;
