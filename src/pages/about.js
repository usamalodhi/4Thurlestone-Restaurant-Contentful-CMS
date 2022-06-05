import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { SimpleGrid, Text, Center, VStack, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const AboutPage = ({ data }) => {
  const imageChef = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageChef);
  const imageMain = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageMain);
  const imageDessert = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageDessert);

  // const { aboutPageTextOne } = data.allContentfulAboutPage.nodes[0].aboutPageTextOne;

  // const { aboutPageTextTwo } = data.allContentfulAboutPage.nodes[0].aboutPageTextTwo;

  // const { aboutPageTextThree } = data.allContentfulAboutPage.nodes[0].aboutPageTextThree;

  return (
    <>
      <SimpleGrid minChildWidth='300px' background='#272625' color='#EAE6E1'>
        <VStack padding='24px 24px' background='#272625' margin='auto 0'>
          <Text textAlign='left'>Sokol Petriti </Text>
          <Text maxWidth='60ch' textAlign='left'>
            Chef/Owner Sokol Petriti has excellent cre-dentials. He attended the Pru Leith cookery
            school and was runner up at the end of the year, from amongst 100. He went on to work
            under Gordon Ramsay at Claridges before taking the step to open his own gastro pub, The
            Ferry in Thames Ditton. His last stop was the eponymous ‘Petriti’s’ in East Molesey.
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

      <SimpleGrid background='#EAE6E1' color='#272625' columns={1}>
        <Center>
          <Text padding='24px 0px 24px 0px' textAlign='center'>
            A lot has happened in the very few months 4 Thurlestone has been open. From refurbishing
            the old Top Tune shop, Sokol has established a popular café, but has managed to create a
            space and menu which is different to other venues in the high street. He has gained a
            much coveted alcohol licence. He started of-fering Sunday roasts, which by all accounts
            are extremely good. And he has opened his fine dining experience. This restaurant
            ele-ment is currently only open on Friday and Saturday evenings from 6-11pm. The menu
            offers 3 choices of starter, 3 mains and 3 des-serts. There is a vegetarian choice too.
          </Text>
        </Center>
        <GatsbyImage image={imageMain} alt='test' />
        <Center>
          <Text padding='24px 0px 24px 0px' textAlign='center'>
            Read our reviews on google
            <Link
              href='https://www.google.com/maps/place/4+Thurlestone/@51.3951872,-0.4484858,15z/data=!4m7!3m6!1s0x0:0x3b8beecae7dadc67!8m2!3d51.395187!4d-0.448488!9m1!1b1'
              isExternal
            >
              Google Reviews <ExternalLinkIcon mx='2px' />
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
        <Center padding='24px 24px' direction='column' background='#272625'>
          <VStack>
            <Text>Visit Shepperton</Text>
            <Text>
              Another reason to drop by 4 Thurlestone is the opportunity to explore the idyllic
              village of Shepperton. Film enthusiasts can find Pinewood Studios located here and you
              could bump into your favourite start as they are said to have also been frequent
              visitors to the village inns. There are wonderful riverside walks when you can explore
              the wildlife of the area and enjoy stunning riverscapes. Church Square is a
              conservation area, here you will find some of Shepperton's most attractive properties
              and hotels, many have rear access to the river. There are hotels, shops, inns and
              restaurants. There are many transport links to take you to neighbouring towns and a
              direct train to London.
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
      }
    }
  }
`;

export default AboutPage;
