import { graphql } from 'gatsby';

export const fragment = graphql`
  fragment menuData on ContentfulMenuItem {
    name
    price
    category
  }
`;
