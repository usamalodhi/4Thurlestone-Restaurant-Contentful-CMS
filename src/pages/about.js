import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { SimpleGrid, Box, Text, Center, Flex } from '@chakra-ui/react';

const AboutPage = ({ data }) => {
  console.log(data);

  const imageChef = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageChef);
  const imageMain = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageMain);
  const imageDessert = getImage(data.allContentfulAboutPage.nodes[0].aboutPageImageDessert);

  // const { aboutPageTextOne } = data.allContentfulAboutPage.nodes[0].aboutPageTextOne;

  // const { aboutPageTextTwo } = data.allContentfulAboutPage.nodes[0].aboutPageTextTwo;

  // const { aboutPageTextThree } = data.allContentfulAboutPage.nodes[0].aboutPageTextThree;

  return (
    <>
      <SimpleGrid minChildWidth='300px' background='#E0E0E0' color='#EAE6E1'>
        <Center background='#272625'>
          <Text padding='0px 24px' textAlign='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab laudantium
            corrupti a hic cupiditate, dolorem doloremque explicabo distinctio quidem dolorum nihil,
            eos nesciunt impedit tenetur veritatis. Molestiae, magni eum? Quos blanditiis expedita
            mollitia totam, necessitatibus asperiores eos cumque harum similique molestias atque
            iusto quaerat magni odit sit facere beatae ipsa sapiente voluptatibus dolores assumenda
            voluptatem provident officia perspiciatis! Aliquam. Officia numquam fugiat tempora a
          </Text>
        </Center>
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
          <Text padding='0px 24px' textAlign='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab laudantium
            corrupti a hic cupiditate, dolorem doloremque explicabo distinctio quidem dolorum nihil,
            eos nesciunt impedit tenetur veritatis. Molestiae, magni eum? Quos blanditiis expedita
            mollitia totam, necessitatibus asperiores eos cumque harum similique molestias atque
            iusto quaerat magni odit sit facere beatae ipsa sapiente voluptatibus dolores assumenda
            voluptatem provident officia perspiciatis! Aliquam. Officia numquam fugiat tempora a
          </Text>
        </Center>
        <GatsbyImage image={imageMain} alt='test' />
        <Center>
          <Text padding='0px 24px' textAlign='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab laudantium
            corrupti a hic cupiditate, dolorem doloremque explicabo distinctio quidem dolorum nihil,
            eos nesciunt impedit tenetur veritatis. Molestiae, magni eum? Quos blanditiis expedita
            mollitia totam, necessitatibus asperiores eos cumque harum similique molestias atque
            iusto quaerat magni odit sit facere beatae ipsa sapiente voluptatibus dolores assumenda
            voluptatem provident officia perspiciatis! Aliquam. Officia numquam fugiat tempora a
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
        <Center background='#272625'>
          <Text padding='0px 24px' textAlign='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab laudantium
            corrupti a hic cupiditate, dolorem doloremque explicabo distinctio quidem dolorum nihil,
            eos nesciunt impedit tenetur veritatis. Molestiae, magni eum? Quos blanditiis expedita
            mollitia totam, necessitatibus asperiores eos cumque harum similique molestias atque
            iusto quaerat magni odit sit facere beatae ipsa sapiente voluptatibus dolores assumenda
            voluptatem provident officia perspiciatis! Aliquam. Officia numquam fugiat tempora a
          </Text>
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
            height: 700
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
            height: 700
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
