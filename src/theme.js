import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

const Header = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px',
    background: 'brand.secondary',
    color: 'brand.primary',
  },
};

const Footer = {
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    justifyItems: 'left',
    rowGap: '16px',
    padding: '24px',
    background: 'brand.secondary',
    color: 'brand.primary',
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
  },
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'poppins, sans-serif',
        letterSpacing: '0.15em',
      },

      h1: {
        fontSize: ['1.5rem', '1.5rem', '1.5rem', '1.5rem', '2rem', '2rem', '2rem'],
        fontWeight: 'bold',
      },
      h2: {
        fontSize: ['1.25rem', '1.25rem', '1.25rem', '1.25rem', '1.5rem', '1.5rem', '1.5rem'],
        fontWeight: 'bold',
      },
      p: {
        fontSize: ['1rem', '1rem', '1rem', '1rem', '1.25rem', '1.25rem', '1.25rem'],
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
      white: '#FFFFFF',
      darkGrey: '#272625',
    },
  },

  layerStyles: {
    homePageTitle: {
      color: 'brand.primary',
    },
    menuTab: {
      color: 'brand.primary',
      background: 'brand.secondary',
      fontWeight: 'bold',
    },
    SwiperSlide: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      textAlign: 'left',
    },
  },
  textStyles: {
    homePageTitle: {
      fontSize: ['1.5rem', '1.5rem', '1.5rem', '2rem', '3rem', '4rem', '5rem'],
      fontWeight: 'bold',
      lineHeight: '150%',
      textAlign: 'justify',
    },
    homePageSubTitle: {
      fontSize: ['1rem', '1rem', '1rem', '1rem', '1.5rem', '2rem', '2.5rem'],
      fontWeight: 'bold',
      lineHeight: '150%',
      textAlign: 'justify',
    },

    Logo: {
      fontSize: ['1rem', '1rem', '1rem', '1rem', '1.5rem', '2rem', '2.5rem'],
      fontWeight: 'bold',
    },
    Footer: {
      fontSize: '1rem',
    },
  },
  breakpoints: {
    sm: '320px',
    md: '425px',
    lg: '768px',
    xl: '1024px',
    '2xl': '1440px',
    '3xl': '1536px',
  },
});

export default theme;
