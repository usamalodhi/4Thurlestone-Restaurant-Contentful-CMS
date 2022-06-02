import React from 'react';
import { Box, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import socialMediaIcons from '../../images';
import { motion } from 'framer-motion';

const FollowSocial = () => {
  return (
    <Box as='nav' aria-label='Social Media Links'>
      <UnorderedList
        display='flex'
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
              <Image
                as={motion.img}
                whileHover={{ y: -5.0, scale: 1.1 }}
                transition='0.1s linear'
                src={icon}
                alt={alt}
                width='24px'
                height='24px'
              />
            </a>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default FollowSocial;
