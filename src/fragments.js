import { graphql } from 'gatsby';

export const menuData = graphql`
  fragment menuData on ContentfulMenuItem {
    name
    price
    category
  }
`;

export const wineData = graphql`
  fragment wineData on ContentfulWineItem {
    name
    strength
    description
    bottlePrice
    priceGlassSmall
    priceGlassLarge
  }
`;
