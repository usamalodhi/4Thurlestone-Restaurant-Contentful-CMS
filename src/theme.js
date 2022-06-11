import { extendTheme } from '@chakra-ui/react';
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

const News = {
  baseStyle: {
    display: 'flex',
    textAlign: 'center',
    fontSize: '18px',
    background: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const NavBar = {
  baseStyle: {
    display: 'inline-flex',
    columnGap: '24px',
    rowGap: '24px',
    // listStyleType: 'none'
  },
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'poppins, sans-serif',
      },
      h1: {
        fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem', '1rem'],
      },
      h2: {
        fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem', '1rem'],
      },
      p: {
        fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem', '1rem'],
      },
    },
  },

  components: {
    Header,
    Footer,
    News,
    NavBar,
  },
  colors: {
    brand: {
      primary: '#EAE6E1',
      secondary: '#000000',
      100: '#4C4C4C',
      200: '#000000',
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
      fontSize: ['5rem'],
      fontWeight: 'bold',
      lineHeight: '150%',
      letterSpacing: '5px',
      fontFamily: 'Poppins',
      textAlign: 'justify',
    },
    homePageInfo: {
      fontSize: ['2.5rem'],
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

// const breakpoints = ['320px', '768px', '1024px', '1440px', '1536px']
// 1rem: From 0px upwards

// 1rem: From 320px upwards
// 1.125rem: From 768px upwards
// 1.188rem: From 1024px upwards
// 1.25rem: From 1440px upwards
// 1.313rem: From 1536px upwards
