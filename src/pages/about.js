import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Box, SimpleGrid } from '@chakra-ui/react';

const AboutPage = ({ data }) => {
  console.log(data);

  const imageChef = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageChef);
  const imageMain = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageMain);
  const imageDessert = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageDessert);

  const { aboutPageTextOne } = data.allContentfulAboutPage.nodes[0].aboutPageTextOne;

  const { aboutPageTextTwo } = data.allContentfulAboutPage.nodes[0].aboutPageTextTwo;

  const { aboutPageTextThree } = data.allContentfulAboutPage.nodes[0].aboutPageTextThree;

  return (
    <>
      <SimpleGrid minChildWidth='300px' spacingX='1em' spacingY='1em' margin='1em 0em'>
        <Box border='2px solid black'>{aboutPageTextOne}</Box>
        <Box border='2px solid black'>
          <GatsbyImage image={imageChef} />
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={1} spacingX='1em' spacingY='1em'>
        <Box border='2px solid black'>
          <GatsbyImage image={imageMain} />
        </Box>
        <Box border='2px solid black'>{aboutPageTextTwo}</Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth='300px' spacingX='1em' spacingY='1em' margin='1em 0em'>
        <Box border='2px solid black'>
          <GatsbyImage image={imageDessert} />
        </Box>
        <Box border='2px solid black'>{aboutPageTextThree}</Box>
      </SimpleGrid>
    </>
  );
};

export const data = graphql`
  {
    allContentfulAboutPage {
      nodes {
        aboutPageTextOne {
          aboutPageTextOne
        }
        aboutPageTextTwo {
          aboutPageTextTwo
        }
        aboutPageTextThree {
          aboutPageTextThree
        }
        aboutPageImageChef {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
        aboutPageImageMain {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
        aboutPageImageDessert {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export default AboutPage;
