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
} from '@chakra-ui/react';
// import { LocalCafeIcon, RestaurantIcon, CakeIcon, BrunchDiningIcon } from '@mui/icons-material';

const MenuPage = ({ data }) => {
  const teaMenu = data.tea.nodes;
  const coffeeMenu = data.coffee.nodes;
  const dailySpecialsMenu = data.dailySpecials.nodes;
  const dessertsMenu = data.desserts.nodes;

  return (
    <>
      {/* background='#E0E0E0'
    colorScheme='gray' */}
      {/* variant='soft-rounded' */}
      <Tabs isLazy isFitted variant='unstyled'>
        <TabList p='0px 0px 0px 0px' background='#white' borderBott='2px solid black'>
          <Tab
            _selected={{ color: '#eae6e1', background: '#000000', fontWeight: 'bold' }}
            _hover={{ color: '#000000', background: '#eae6e1', fontWeight: 'bold' }}
            _active={{ color: '#eae6e1', background: '#000000', fontWeight: 'bold' }}
          >
            Drinks
          </Tab>
          <Tab
            _selected={{ color: '#eae6e1', background: '#000000', fontWeight: 'bold' }}
            _hover={{ color: '#000000', background: '#eae6e1', fontWeight: 'bold' }}
            _active={{ color: '#eae6e1', background: '#000000', fontWeight: 'bold' }}
          >
            Daily
          </Tab>
          <Tab
            _selected={{ color: '#eae6e1', background: '#000000', fontWeight: 'bold' }}
            _hover={{ color: '#000000', background: '#eae6e1', fontWeight: 'bold' }}
            _active={{ color: '#eae6e1', background: '#000000', fontWeight: 'bold' }}
          >
            Dessert
          </Tab>
          <Tab
            _selected={{ color: '#eae6e1', background: '#000000', fontWeight: 'bold' }}
            _hover={{ color: '#000000', background: '#eae6e1', fontWeight: 'bold' }}
            _active={{ color: '#eae6e1', background: '#000000', fontWeight: 'bold' }}
          >
            Evening
          </Tab>
        </TabList>

        <TabPanels p='0px 0px 0px 0px'>
          <TabPanel p='0px 0px 0px 0px'>
            <SimpleGrid minChildWidth='300px'>
              <List border='2px solid black'>
                {teaMenu.map(({ name, price }) => (
                  <ListItem mt='16px' key={name}>
                    <p>{name}</p>
                    <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                  </ListItem>
                ))}
              </List>
              <List border='2px solid black'>
                {coffeeMenu.map(({ name, price }) => (
                  <ListItem mt='16px' key={name}>
                    <p>{name}</p>
                    <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                  </ListItem>
                ))}
              </List>
            </SimpleGrid>
          </TabPanel>

          <TabPanel p='0px 0px 0px 0px'>
            <List>
              {dailySpecialsMenu.map(({ name, price }) => (
                <ListItem key={name}>
                  <p>{name}</p>
                  <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                </ListItem>
              ))}
            </List>
          </TabPanel>

          <TabPanel p='0px 0px 0px 0px'>
            <List>
              {dessertsMenu.map(({ name, price }) => (
                <ListItem key={name}>
                  <p>{name}</p>
                  <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                </ListItem>
              ))}
            </List>
          </TabPanel>

          <TabPanel p='0px 0px 0px 0px'>
            <p>Set Menu</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export const data = graphql`
  {
    tea: allContentfulMenuItem(
      filter: { category: { eq: "Tea" } }
      sort: { fields: price, order: DESC }
    ) {
      nodes {
        ...menuData
      }
    }
    coffee: allContentfulMenuItem(
      filter: { category: { eq: "Coffee" } }
      sort: { fields: price, order: DESC }
    ) {
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
    desserts: allContentfulMenuItem(
      filter: { category: { eq: "Desserts" } }
      sort: { fields: price, order: DESC }
    ) {
      nodes {
        ...menuData
      }
    }
  }
`;

export default MenuPage;
