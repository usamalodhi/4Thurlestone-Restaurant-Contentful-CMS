import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Text, Flex, useStyleConfig, useMediaQuery } from '@chakra-ui/react';
import FollowSocial from '../abstract/FollowSocial';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulIndexPage {
        nodes {
          restaurantTitle
          addressLineOne
          addressLineTwo
          addressLineThree
          openingHoursTitle
          openingHoursCafe
          openingHoursEvening
        }
      }
    }
  `);
  const {
    restaurantTitle,
    addressLineOne,
    addressLineTwo,
    addressLineThree,
    openingHoursTitle,
    openingHoursCafe,
    openingHoursEvening,
  } = data.allContentfulIndexPage.nodes[0];

  const styles = useStyleConfig('Footer');
  const [isLargerThan450] = useMediaQuery('(min-width: 450px)');
  return (
    <Flex
      as='footer'
      __css={styles}
      justifyContent='space-between'
      justifyItems='left'
      alignItems={isLargerThan450 ? 'baseline' : 'center'}
      textAlign={isLargerThan450 ? 'left' : 'center'}
      rowGap='16px'
      style={{ flexDirection: isLargerThan450 ? 'row' : 'column' }}
    >
      <Flex as='address' direction='column' fontStyle='normal'>
        <Text as='h2' fontWeight='bold'>
          {restaurantTitle}
        </Text>
        <Text as='p'>{addressLineOne}</Text>
        <Text as='p'>{addressLineTwo}</Text>
        <Text as='p'>{addressLineThree}</Text>
      </Flex>
      <Flex direction='column'>
        <Text as='h2' fontWeight='bold'>
          {openingHoursTitle}
        </Text>
        <Text as='p'>{openingHoursCafe}</Text>
        <Text as='p' mb='16px'>
          {openingHoursEvening}
        </Text>
        <FollowSocial />
      </Flex>
    </Flex>
  );
};

export default Footer;
