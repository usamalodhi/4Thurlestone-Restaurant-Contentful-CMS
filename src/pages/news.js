import React from 'react';
import { graphql } from 'gatsby';
import BannerBox from '../components/banner/BannerBox';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swipercss/swipercss.css';

const NewsPage = ({ data }) => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  return (
    <>
      <BannerBox
        bannerImage={data.allContentfulBlogPage.nodes[0].bannerImage}
        altText={'Blog 4 Thurelstone, read our latest news and announcements'}
        bannerLabel={'blog'}
      />
      <Box>
        <Box h='70vh'>
          <Swiper
            style={{
              width: '100%',
              height: '100%',
              '--swiper-navigation-size': '1em',
            }}
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '18px',
                background: '#ffffff',
              }}
            >
              Slide 1
            </SwiperSlide>

            <SwiperSlide>
              <Flex
                height='100%'
                flexDirection={isLargerThan1000 ? 'row' : 'column'}
                justifyContent='flex-start'
                alignContent='center'
                textAlign='center'
                border='2px solid red'
              >
                <Box border='2px solid black' height='100%' width={isLargerThan1000 ? '50%' : '100%'}>
                  Picture
                </Box>
                <Box border='2px solid black' height='100%' width={isLargerThan1000 ? '50%' : '100%'}>
                  Text
                </Box>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export const data = graphql`
  {
    allContentfulBlogPage {
      nodes {
        bannerImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export default NewsPage;
