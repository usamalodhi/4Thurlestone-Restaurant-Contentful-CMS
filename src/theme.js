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
//-->Header
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

const theme = extendTheme({
  components: {
    Header,
  },
  colors: {
    brand: {
      primary: '#EAE6E1',
      secondary: '#000000',
      300: '#4C4C4C',
    },
  },

  layerStyles: {
    homePageTitle: {
      background: 'brand.secondary',
      color: 'brand.primary',
    },
    footer: {
      padding: '24px',
      background: '#000000',
      color: '#EAE6E1',
      fontFamily: 'Poppins',
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
      fontSize: ['1rem', '1.5rem', '2rem', '2.5rem'],
      fontFamily: 'Poppins',
      textAlign: 'justify',
      color: 'brand.200',
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
