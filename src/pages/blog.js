import React from 'react';
import { graphql } from 'gatsby';
import BannerBox from '../components/banner/BannerBox';

const BlogPage = ({ data }) => {
  return (
    <>
      <BannerBox
        bannerImage={data.allContentfulBlogPage.nodes[0].bannerImage}
        altText={'Blog 4 Thurelstone, read our latest news and announcements'}
        bannerLabel={'blog'}
      />
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

export default BlogPage;
