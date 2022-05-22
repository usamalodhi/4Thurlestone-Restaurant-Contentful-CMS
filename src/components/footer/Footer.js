import React from 'react';
import { Flex, useStyleConfig, useMediaQuery } from '@chakra-ui/react';
import OpeningHoursSocialLinks from '../abstract/OpeningHours_SocialLinks';
import NameAddress from '../abstract/Name_Address';

const Footer = () => {
  const styles = useStyleConfig('Footer');
  const [isLargerThan450] = useMediaQuery('(min-width: 450px)');
  return (
    <Flex
      as='footer'
      __css={styles}
      justifyContent='space-between'
      alignItems='baseline'
      rowGap='8px'
      style={{ flexDirection: isLargerThan450 ? 'row' : 'column' }}
    >
      <NameAddress />
      <OpeningHoursSocialLinks />
    </Flex>
  );
};

export default Footer;
