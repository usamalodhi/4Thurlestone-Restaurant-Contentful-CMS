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
      alignItems={isLargerThan450 ? 'baseline' : 'center'}
      textAlign={isLargerThan450 ? 'left' : 'center'}
      flexDirection={isLargerThan450 ? 'row' : 'column'}
    >
      <Flex as='address' fontStyle='normal' direction='column' pr={isLargerThan450 ? '24px' : null}>
        <Text as='h2' fontSize='1rem' fontWeight='bold'>
          {restaurantTitle}
        </Text>
        <Text as='p' fontSize='1rem'>
          {addressLineOne}
        </Text>
        <Text as='p' fontSize='1rem'>
          {addressLineTwo}
        </Text>
        <Text as='p' fontSize='1rem'>
          {addressLineThree}
        </Text>
      </Flex>
      <Flex direction='column'>
        <Text as='h2' fontSize='1rem' fontWeight='bold'>
          {openingHoursTitle}
        </Text>
        <Text as='p' fontSize='1rem' textStyle='Footer'>
          {openingHoursCafe}
        </Text>
        <Text as='p' fontSize='1rem' textStyle='Footer' mb='16px'>
          {openingHoursEvening}
        </Text>
        <FollowSocial />
      </Flex>
    </Flex>
  );
};

export default Footer;
