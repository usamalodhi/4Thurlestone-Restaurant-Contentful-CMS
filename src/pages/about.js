import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { SimpleGrid, Text, Center, VStack, Link } from '@chakra-ui/react';
import BannerBox from '../components/banner/BannerBox';

const AboutPage = ({ data }) => {
  const imageChef = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageChef);
  const imageMain = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageMain);
  const imageDessert = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageDessert);
  const { aboutPageTextOne } = data.allContentfulAboutPage.nodes[0].aboutPageTextOne;
  const { aboutPageTextTwo } = data.allContentfulAboutPage.nodes[0].aboutPageTextTwo;
  const { aboutPageTextThree } = data.allContentfulAboutPage.nodes[0].aboutPageTextThree;

  return (
    <>
      <BannerBox
        bannerImage={data.allContentfulAboutPage.nodes[0].bannerImage}
        altText={'About 4 Thurelstone, Thurlestone Parade, Shepperton'}
        bannerLabel={'about'}
      />

      <SimpleGrid minChildWidth='300px' background='brand.darkGrey' color='brand.primary'>
        <VStack padding='24px 24px' background='brand.darkGrey' margin='auto 0'>
          <Text textAlign='left'>Sokol Petriti </Text>
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

      <SimpleGrid background='brand.primary' color='brand.darkGrey' columns={1}>
        <Center>
          <Text padding='24px 0px 24px 0px' textAlign='center'>
            {aboutPageTextTwo}
          </Text>
        </Center>
        <GatsbyImage image={imageMain} alt='test' />
        <Center>
          <Text padding='24px 0px 24px 0px' textAlign='center'>
            Read our reviews on google <br />
            <Link
              href='https://www.google.com/maps/place/4+Thurlestone/@51.3951872,-0.4484858,15z/data=!4m7!3m6!1s0x0:0x3b8beecae7dadc67!8m2!3d51.395187!4d-0.448488!9m1!1b1'
              isExternal
            >
              Google Reviews
            </Link>
          </Text>
        </Center>
      </SimpleGrid>

      <SimpleGrid color='#EAE6E1' minChildWidth='300px'>
        <Center>
          <GatsbyImage
            style={{ width: '100%', height: '100%' }}
            imgStyle={{ objectFit: 'fill' }}
            image={imageDessert}
            alt='test'
          />
        </Center>
        <Center padding='24px 24px' direction='column' background='brand.darkGrey'>
          <VStack>
            <Text>Visit Shepperton</Text>
            <Text>{aboutPageTextThree}</Text>
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
