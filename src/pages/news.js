import React from 'react';
import { graphql } from 'gatsby';
import BannerBox from '../components/banner/BannerBox';
import { Box } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const NewsPage = ({ data }) => {
  return (
    <>
      <BannerBox
        bannerImage={data.allContentfulBlogPage.nodes[0].bannerImage}
        altText={'Blog 4 Thurelstone, read our latest news and announcements'}
        bannerLabel={'blog'}
      />
      <Box>
        <Box h='100vh'>
          <Swiper
            style={{
              width: '100%',
              height: '100%',
            }}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
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

            <SwiperSlide
              style={{
                textAlign: 'center',
                fontSize: '18px',
                background: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Slide 2
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
