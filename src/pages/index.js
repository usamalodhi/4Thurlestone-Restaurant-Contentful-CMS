import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { Box, Text, Flex } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swipercss/swipercss.css';

const IndexPage = ({ data }) => {
  const { restaurantTitle, heroSloganTwo, heroSloganOne } = data.allContentfulIndexPage.nodes[0];
  const newsItems = data.allContentfulNewsItem.nodes;

  console.log('newsItems', newsItems);

  const image = getImage(data.allContentfulIndexPage.nodes[0].heroImageIndex);

  return (
    <>
      <BgImage style={{ height: '100vh', backgroundImage: 'contain' }} image={image}>
        <Flex backgroundColor='rgba(0,0,0,0.5)' h='100vh'>
          <Flex direction='column' height='min-content' padding='16px' margin='auto auto'>
            <Box>
              <Text as='h2' textStyle='homePageSubTitle' layerStyle='homePageTitle'>
                {heroSloganOne}
              </Text>
            </Box>
            <Box>
              <Text as='h1' textStyle='homePageTitle' layerStyle='homePageTitle'>
                {restaurantTitle}
              </Text>
            </Box>
            <Box>
              <Text as='h2' textStyle='homePageSubTitle' layerStyle='homePageTitle'>
                {heroSloganTwo}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </BgImage>
      <Box backgroundColor='brand.primary'>
        <Flex alignItems='center' justifyContent='center'>
          <Box>
            <Text as='h2'>Latest News</Text>
          </Box>
        </Flex>

        <Box h='40vh' pl='24px' pr='24px'>
          <Swiper
            style={{
              width: '100%',
              height: '100%',
            }}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className='mySwiper'
          >
            {newsItems.map((data) => {
              return (
                <SwiperSlide key={data.newsItemName}>
                  <Flex layerStyle='SwiperSlide'>
                    <Box color='brand.darkGrey' w='70ch'>
                      <Text as='h2' fontWeight='bold' w='100%'>
                        {data.newsItemName}
                      </Text>
                      <Text as='p' w='100%'>
                        {data.newsItemDescription}
                      </Text>
                    </Box>
                  </Flex>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export const data = graphql`
  {
    allContentfulIndexPage {
      nodes {
        heroSloganOne
        restaurantTitle
        heroSloganTwo
        heroImageIndex {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    allContentfulNewsItem {
      nodes {
        newsItemName
        newsItemDescription
      }
    }
  }
`;

export default IndexPage;
