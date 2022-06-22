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
  Divider,
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
            Set
          </Tab>
        </TabList>

        <TabPanels p='24px'>
          <TabPanel>
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
          <TabPanel>
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
          <TabPanel>
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
          <TabPanel>
            <Flex direction='column'>
              <Flex justifyContent='center' alignItems='center' direction='column' fontWeight='bold'>
                <Text>Two Course £28.00</Text>
                <Text>Three Course £40.00</Text>
              </Flex>

              <Text pt='24px' fontWeight='bold'>
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
              <Divider p='8px 0px' />
            </Flex>
            <Flex direction='column' pb='8px'>
              <Text pt='24px' fontWeight='bold'>
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
            <Divider p='8px 0px' />
            <Flex direction='column' pb='8px'>
              <Text pt='24px' pb='8px' fontWeight='bold'>
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
            <Divider p='8px 0px' />

            <Flex pt='24px' justifyContent='center' alignItems='center' direction='column' fontWeight='bold'>
              <Text>Wine List</Text>
            </Flex>

            <Flex direction='column' pb='8px'>
              <Text pt='24px' pb='8px' fontWeight='bold'>
                Red
              </Text>
              <List>
                {redWineList.map(({ name, strength, description, bottlePrice, priceGlassSmall, priceGlassLarge }) => (
                  <ListItem pb='8px' key={name}>
                    <Flex direction='column'>
                      <Text pb='8px'>
                        <Text as='span'>{name}, </Text>
                        <Text as='span' fontStyle='italic'>
                          {strength}
                        </Text>
                      </Text>
                      <Text pb='8px'>{description}</Text>
                      <Text pb='8px'>
                        {priceGlassSmall} {priceGlassLarge} {bottlePrice}
                      </Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Flex>
            <Divider p='8px 0px' />
            <Flex direction='column' pb='8px'>
              <Text pt='24px' pb='8px' fontWeight='bold'>
                White
              </Text>
              <List>
                {whiteWineList.map(({ name, strength, description, bottlePrice, priceGlassSmall, priceGlassLarge }) => (
                  <ListItem pb='8px' key={name}>
                    <Flex direction='column'>
                      <Text pb='8px'>
                        <Text as='span'>{name}, </Text>
                        <Text as='span' fontStyle='italic'>
                          {strength}
                        </Text>
                      </Text>
                      <Text pb='8px'>{description}</Text>
                      <Text pb='8px'>
                        {priceGlassSmall} {priceGlassLarge} {bottlePrice}
                      </Text>
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
