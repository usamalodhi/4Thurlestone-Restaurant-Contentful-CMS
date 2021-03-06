import 'focus-visible/dist/focus-visible';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Layout from './components/layout/Layout';
import theme from './theme';

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
};
