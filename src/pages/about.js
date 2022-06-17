import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { SimpleGrid, Text, Center, VStack, Link } from '@chakra-ui/react';
import BannerBox from '../components/banner/BannerBox';

const AboutPage = ({ data }) => {
  const imageChef = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageChef);
  const imageDessert = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageDessert);
  const { aboutPageTextOne } = data.allContentfulAboutPage.nodes[0].aboutPageTextOne;
  const { aboutPageTextTwo } = data.allContentfulAboutPage.nodes[0].aboutPageTextTwo;

  return (
    <>
      <BannerBox
        bannerImage={data.allContentfulAboutPage.nodes[0].bannerImage}
        altText={'About 4 Thurelstone, Thurlestone Parade, Shepperton'}
        bannerLabel={'about'}
      />

      <SimpleGrid minChildWidth='400px' background='brand.primary' color='brand.darkGrey' pb='24px'>
        <VStack padding='24px 24px' margin='auto 0'>
          <Text fontWeight='bold'>Sokol Petriti</Text>
          <Text maxWidth='60ch' textAlign='left'>
            {aboutPageTextOne}
          </Text>
        </VStack>
        <Center>
          <GatsbyImage
            style={{ width: '100%', height: '100%' }}
            imgStyle={{ objectFit: 'fill' }}
            image={imageChef}
            alt='test'
          />
        </Center>
      </SimpleGrid>

      <SimpleGrid background='brand.primary' color='brand.darkGrey' minChildWidth='400px'>
        <Center>
          <GatsbyImage
            style={{ width: '100%', height: '100%' }}
            imgStyle={{ objectFit: 'fill' }}
            image={imageDessert}
            alt='test'
          />
        </Center>
        <Center padding='24px 24px' direction='column'>
          <VStack>
            <Text fontWeight='bold'>4 Thurlestone</Text>
            <Text maxWidth='60ch' textAlign='left'>
              {aboutPageTextTwo}
            </Text>
          </VStack>
        </Center>
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
          gatsbyImageData(
            layout: CONSTRAINED
            height: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
          )
        }
        aboutPageImageMain {
          gatsbyImageData(
            layout: CONSTRAINED
            height: 700
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
          )
        }
        aboutPageImageDessert {
          gatsbyImageData(
            layout: CONSTRAINED
            height: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
          )
        }
        bannerImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export default AboutPage;
