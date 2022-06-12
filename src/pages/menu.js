import React from 'react';
import { graphql } from 'gatsby';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  SimpleGrid,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';
import BannerBox from '../components/banner/BannerBox';

const MenuPage = ({ data }) => {
  const teaMenu = data.tea.nodes;
  const coffeeMenu = data.coffee.nodes;
  const dailySpecialsMenu = data.dailySpecials.nodes;
  const dessertsMenu = data.desserts.nodes;
  const startersSetMenu = data.starter.nodes;
  const dessertSetMenu = data.dessert.nodes;
  const mainSetMenu = data.main.nodes;
  const whiteWineList = data.whiteWine.nodes;
  const redWineList = data.redWine.nodes;

  const menuTabStyles = { color: '#EAE6E1', background: '#000000', fontWeight: 'bold' };
  const menuTabStylesHover = { color: '#000000', background: '#EAE6E1', fontWeight: 'bold' };

  return (
    <>
      <BannerBox
        bannerImage={data.allContentfulMenuPage.nodes[0].bannerImage}
        altText={
          'Menu 4 Thurelstone, Taking inspiration from British and European cultures as well as local favourites'
        }
        bannerLabel={'menu'}
      />
      <Tabs isLazy isFitted variant='unstyled'>
        <TabList p='0' background='#FFFFFF'>
          <Tab _selected={menuTabStyles} _active={menuTabStyles} _hover={menuTabStylesHover}>
            Drinks
          </Tab>
          <Tab _selected={menuTabStyles} _active={menuTabStyles} _hover={menuTabStylesHover}>
            Daily
          </Tab>
          <Tab _selected={menuTabStyles} _active={menuTabStyles} _hover={menuTabStylesHover}>
            Dessert
          </Tab>
          <Tab _selected={menuTabStyles} _active={menuTabStyles} _hover={menuTabStylesHover}>
            Fixed
          </Tab>
        </TabList>

        <TabPanels p='24px'>
          <TabPanel p='0'>
            <SimpleGrid minChildWidth='300px' spacingX='16px'>
              <List>
                {teaMenu.map(({ name, price }) => (
                  <ListItem pb='8px' key={name}>
                    <Flex>
                      <Text fontWeight='bold'>{name}</Text>
                      <Spacer />
                      <Text fontStyle='italic'>{price}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
              <List>
                {coffeeMenu.map(({ name, price }) => (
                  <ListItem pb='8px' key={name}>
                    <Flex>
                      <Text fontWeight='bold'>{name}</Text>
                      <Spacer />
                      <Text fontStyle='italic'>{price}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </SimpleGrid>
          </TabPanel>
          <TabPanel p='0'>
            <List>
              {dailySpecialsMenu.map(({ name, price }) => (
                <ListItem pb='8px' key={name}>
                  <Flex>
                    <Text fontWeight='bold'>{name}</Text>
                    <Spacer />
                    <Text fontStyle='italic'>{price}</Text>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </TabPanel>

          <TabPanel p='0'>
            <List>
              {dessertsMenu.map(({ name, price }) => (
                <ListItem pb='8px' key={name}>
                  <Flex>
                    <Text fontWeight='bold'>{name}</Text>
                    <Spacer />
                    <Text fontStyle='italic'>{price}</Text>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </TabPanel>
          <TabPanel p='0'>
            <Flex direction='column' pb='8px'>
              <Text fontWeight='bold' pb='8px'>
                Starter
              </Text>
              <List>
                {startersSetMenu.map(({ name }) => (
                  <ListItem pb='8px' key={name}>
                    <Flex>
                      <Text fontStyle='italic'>{name}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Flex>
            <Flex direction='column' pb='8px'>
              <Text fontWeight='bold' pb='8px'>
                Main Course
              </Text>
              <List>
                {mainSetMenu.map(({ name }) => (
                  <ListItem pb='8px' key={name}>
                    <Flex>
                      <Text fontStyle='italic'>{name}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Flex>
            <Flex direction='column' pb='8px'>
              <Text fontWeight='bold' pb='8px'>
                Dessert
              </Text>
              <List>
                {dessertSetMenu.map(({ name }) => (
                  <ListItem pb='8px' key={name}>
                    <Flex>
                      <Text fontStyle='italic'>{name}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Flex>
            <Flex direction='column' pb='8px'>
              <Text fontWeight='bold' pb='8px'>
                Red
              </Text>
              <List>
                {redWineList.map(({ name, strength, description, bottlePrice, priceGlassSmall, priceGlassLarge }) => (
                  <ListItem pb='8px' key={name}>
                    <Flex direction='column'>
                      <Text fontStyle='italic'>{name}</Text>
                      <Text>{strength}</Text>
                      <Text>{description}</Text>
                      <Text>{bottlePrice}</Text>
                      <Text>{priceGlassSmall}</Text>
                      <Text>{priceGlassLarge}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Flex>
            <Flex direction='column' pb='8px'>
              <Text fontWeight='bold' pb='8px'>
                White
              </Text>
              <List>
                {whiteWineList.map(({ name, strength, description, bottlePrice, priceGlassSmall, priceGlassLarge }) => (
                  <ListItem pb='8px' key={name}>
                    <Flex direction='column'>
                      <Text fontStyle='italic'>{name}</Text>
                      <Text>{strength}</Text>
                      <Text>{description}</Text>
                      <Text>{bottlePrice}</Text>
                      <Text>{priceGlassSmall}</Text>
                      <Text>{priceGlassLarge}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export const data = graphql`
  {
    starter: allContentfulSetMenuItem(filter: { category: { eq: "SetMenuStarter" } }) {
      nodes {
        name
      }
    }
    main: allContentfulSetMenuItem(filter: { category: { eq: "SetMenuMain" } }) {
      nodes {
        name
      }
    }
    dessert: allContentfulSetMenuItem(filter: { category: { eq: "SetMenuDessert" } }) {
      nodes {
        name
      }
    }
    whiteWine: allContentfulWineItem(filter: { type: { eq: "White" } }) {
      nodes {
        ...wineData
      }
    }
    redWine: allContentfulWineItem(filter: { type: { eq: "Red" } }) {
      nodes {
        ...wineData
      }
    }
    tea: allContentfulMenuItem(filter: { category: { eq: "Tea" } }, sort: { fields: price, order: DESC }) {
      nodes {
        ...menuData
      }
    }

    coffee: allContentfulMenuItem(filter: { category: { eq: "Coffee" } }, sort: { fields: price, order: DESC }) {
      nodes {
        ...menuData
      }
    }

    dailySpecials: allContentfulMenuItem(
      filter: { category: { eq: "DailySpecials" } }
      sort: { fields: price, order: DESC }
    ) {
      nodes {
        ...menuData
      }
    }

    desserts: allContentfulMenuItem(filter: { category: { eq: "Desserts" } }, sort: { fields: price, order: DESC }) {
      nodes {
        ...menuData
      }
    }
    allContentfulMenuPage {
      nodes {
        bannerImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export default MenuPage;
