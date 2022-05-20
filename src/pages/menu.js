import React from 'react';
import { graphql } from 'gatsby';
import { Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem } from '@chakra-ui/react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const MenuPage = ({ data }) => {
  const teaMenu = data.tea.nodes;
  const coffeeMenu = data.coffee.nodes;
  const dailySpecialsMenu = data.dailySpecials.nodes;
  const dessertsMenu = data.desserts.nodes;
  const setMenu = renderRichText(data.allContentfulMenuPage.nodes[0].setMenu);

  console.log(setMenu);
  return (
    <>
      <Tabs isLazy isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Tea Menu</Tab>
          <Tab>Daily Specials</Tab>
          <Tab>Desserts</Tab>
          <Tab>Set Menu</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <List>
              {teaMenu.map(({ name, price }) => (
                <ListItem key={name}>
                  <p>{name}</p>
                  <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                </ListItem>
              ))}
            </List>
            <List>
              {coffeeMenu.map(({ name, price }) => (
                <ListItem key={name}>
                  <p>{name}</p>
                  <p>{`£${parseFloat(price).toFixed(2)}`}</p>
                </ListItem>
              ))}
            </List>
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
    allContentfulMenuPage {
      nodes {
        setMenu {
          raw
        }
      }
    }
  }
`;

export default MenuPage;
