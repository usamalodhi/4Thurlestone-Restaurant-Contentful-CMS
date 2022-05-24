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
      <Tabs isLazy isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Drinks</Tab>
          <Tab>Daily</Tab>
          <Tab>Dessert</Tab>
          <Tab>Evening</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid minChildWidth='300px'>
              <List border='2px solid black'>
                {teaMenu.map(({ name, price }) => (
                  <ListItem key={name}>
                    <p>{name}</p>
                    <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                  </ListItem>
                ))}
              </List>
              <List border='2px solid black'>
                {coffeeMenu.map(({ name, price }) => (
                  <ListItem key={name}>
                    <p>{name}</p>
                    <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                  </ListItem>
                ))}
              </List>
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
            <List>
              {dailySpecialsMenu.map(({ name, price }) => (
                <ListItem key={name}>
                  <p>{name}</p>
                  <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                </ListItem>
              ))}
            </List>
          </TabPanel>

          <TabPanel>
            <List>
              {dessertsMenu.map(({ name, price }) => (
                <ListItem key={name}>
                  <p>{name}</p>
                  <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                </ListItem>
              ))}
            </List>
          </TabPanel>

          <TabPanel>
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
