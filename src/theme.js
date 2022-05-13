import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#000000',
      200: '#FFFFFF',
      300: '#4C4C4C',
    },
  },
  textStyles: {
    homePageTitle: {
      fontSize: ['2rem', '3rem', '4rem', '5rem'],
      fontWeight: 'bold',
      lineHeight: '150%',
      letterSpacing: '5px',
      fontFamily: 'Poppins',
      textAlign: 'justify',
      color: 'brand.200',
    },
    homePageInfo: {
      fontSize: ['1rem', '1.5rem', '2rem', '2.5rem'],
      fontFamily: 'Poppins',
      textAlign: 'justify',
      color: 'brand.200',
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.75rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  breakpoints: ['420px', '767px', '768px', '1365px'],
});

export default theme;

// Notes
// --Breakpoints
// 420px cover all smartphones in portrait mode
// 767px most smartphones in landscape mode
// 768px most Android tablets and iPads in portrait mode
// 1365px most Android tablets and iPads in landscape mode, older desktop/laptop monitors
// 1366px iPad PRO, HDready and FullHD desktop laptop monitors

// Reference:
// https://howto-wordpress-tips.com/responsive-breakpoints-tutorial/

// Desktop computers and laptops:
// 4k monitors: 3840×2160
// FullHD monitors: 1920×1080
// HDready monitors: 1366×768, 1440×900, 1680×1050
// Older models: 1280×720

// Tablets and smartphones:
// iPad PRO and top Android tablets: up to 1024×1366
// older iPads and Android tablets: 768×1024
// top iPhone and Android phones: up to 420×800
// mid-range iPhone and Android phones: 360×640 to 375×800
// older iPhone and Android phones: down to 320×500

// Heading 1 – 6rem / 6rem
// Heading 2 – 3.75rem / 3.75rem
// Heading 3 – 3rem / 3.25rem
// Heading 4 – 2.25rem / 2.5rem
// Heading 5 – 1.5rem / 2rem
// Heading 6 – 1.25rem / 2rem
// Body Text – 1rem / 1.5rem
