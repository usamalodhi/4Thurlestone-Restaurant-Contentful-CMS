import React from 'react';
import { Box, Flex, Center } from '@chakra-ui/react';
import BannerLabel from './BannerLabel';

const BannerBox = () => {
  return (
    <Flex color='white'>
      <Center w='100vw' h='50vh' bg='green.500'>
        <Box>
          <BannerLabel />
        </Box>
      </Center>
    </Flex>
  );
};

export default BannerBox;
