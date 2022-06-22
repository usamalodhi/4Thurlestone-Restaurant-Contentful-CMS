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
        fontSize: ['1.5rem', '1.5rem', '1.5rem', '1.5rem', '2rem', '2rem'],
        fontWeight: 'bold',
      },
      h2: {
        fontSize: ['1.25rem', '1.25rem', '1.25rem', '1.25rem', '1.5rem', '1.5rem'],
        fontWeight: 'bold',
      },
      p: {
        fontSize: ['1rem', '1rem', '1rem', '1rem', '1.25rem', '1.25rem'],
      },
      '.chakra-divider': {
        borderColor: 'black !important',
        opacity: 1,
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
      alignItems: 'top',
      height: '100%',
      textAlign: 'left',
      paddingTop: '24px',
    },
  },
  textStyles: {
    homePageTitle: {
      // breakpoints: ['<320px', '320px', 425px, 768px, 1024px, 1440px],
      fontSize: ['2rem', '2rem', '3rem', '5rem', '6rem', '8rem'],
      fontWeight: 'bold',
      lineHeight: '150%',
      textAlign: 'justify',
    },
    homePageSubTitle: {
      // breakpoints: ['<320px', '320px', 425px, 768px, 1024px, 1440px]
      fontSize: ['1rem', '1rem', '1.5rem', '2.5rem', '3rem', '4rem'],
      fontWeight: 'bold',
      lineHeight: '150%',
      textAlign: 'justify',
    },

    // fontWeight='bold' letterSpacing='0.313em'

    Logo: {
      // breakpoints: ['<320px', '320px', 425px, 768px, 1024px, 1440px]
      fontSize: ['1.25rem', '1.25rem', '1.25rem', '1.25rem', '1.25rem', '1.25rem'],
      fontWeight: 'bold',
      letterSpacing: '0.313em',
    },
    siteLinks: {
      // breakpoints: ['<320px', '320px', 425px, 768px, 1024px, 1440px]
      fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem', '1rem'],
      // letterSpacing: '0.313em',
      textAlign: 'right',
    },
    Footer: {
      fontSize: '1rem',
    },
  },
  breakpoints: {
    sm: '320px',
    md: '425px',
    lg: '700px',
    xl: '1024px',
    '2xl': '1440px',
  },
});

export default theme;
// breakpoints: ['<320px', '320px', 425px, 768px, 1024px, 1440px, 1536px],
