import { extendTheme } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/theme';

import '@fontsource/poppins';

//Notes
// display
// position (left, right, bottom, position: absolute)
// box-model & color (margin, padding, background)
// typography
// manipulations (transform filter opacity)
// misc (border-radius, box shadow)

//components
const Header = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px',
    background: '#000000',
    color: '#EAE6E1',
    fontFamily: 'Poppins',
  },
};

const Footer = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px',
    background: '#000000',
    color: '#EAE6E1',
    fontFamily: 'Poppins',
  },
};

const theme = extendTheme({
  components: {
    Header,
    Footer,
  },
  colors: {
    brand: {
      primary: '#EAE6E1',
      secondary: '#000000',
      300: '#4C4C4C',
      400: '#000000',
    },
  },

  layerStyles: {
    homePageTitle: {
      color: 'brand.primary',
    },
    menuTab: {
      color: '#EAE6E1',
      background: '#000000',
      fontWeight: 'bold',
    },
  },
  textStyles: {
    homePageTitle: {
      fontSize: ['2rem'],
      fontWeight: 'bold',
      lineHeight: '150%',
      letterSpacing: '5px',
      fontFamily: 'Poppins',
      textAlign: 'justify',
    },
    homePageInfo: {
      fontSize: ['1rem'],
      fontWeight: 'bold',
      lineHeight: '150%',
      letterSpacing: '5px',
      fontFamily: 'Poppins',
      textAlign: 'justify',
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    '2xl': '1536px',
  },
});

export default theme;
