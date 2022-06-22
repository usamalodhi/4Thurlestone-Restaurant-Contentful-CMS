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

      <SimpleGrid minChildWidth='320px' background='brand.primary' color='brand.darkGrey' pb='24px'>
        <VStack padding='24px 24px' margin='auto 0'>
          <Text fontWeight='bold'>Sokol Petriti</Text>
          <Text maxWidth='65ch' textAlign='left'>
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

      <SimpleGrid background='brand.primary' color='brand.darkGrey' minChildWidth='320px'>
        <Center>
          <GatsbyImage
            style={{ width: '100%', height: '100%' }}
            imgStyle={{ objectFit: 'fill' }}
            image={imageDessert}
            alt='test'
          />
        </Center>
        <VStack padding='24px 24px'>
          <Text fontWeight='bold'>4 Thurlestone</Text>
          <Text maxWidth='65ch' textAlign='left'>
            {aboutPageTextTwo} <br /> Take a look at how much our customers enjoyed their visit by reading stellar
            reviews on{' '}
            <Link
              fontWeight='bold'
              href='https://www.tripadvisor.co.uk/Restaurant_Review-g528815-d24110145-Reviews-4_Thurlestone-Shepperton_Surrey_England.html'
              isExternal
            >
              Tripadvisor{' '}
            </Link>
            and{' '}
            <Link
              fontWeight='bold'
              href='https://www.google.com/maps/place/4+Thurlestone/@51.3951871,-0.4529705,17z/data=!4m7!3m6!1s0x4876752258168c4d:0x3b8beecae7dadc67!8m2!3d51.395187!4d-0.448488!9m1!1b1'
              isExternal
            >
              Google.
            </Link>
          </Text>
        </VStack>
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
