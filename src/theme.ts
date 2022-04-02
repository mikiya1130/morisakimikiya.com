import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#252A34',
  white: '#EAEAEA',
  red: '#FF2E63',
  yellow: '#F4B14C',
  teal: '#08D9D6',
};

const styles = {
  global: {
    body: {
      bg: 'teal',
      lineHeight: '1.8em',
    },
    img: {
      pointerEvents: 'none',
    },
  },
};

const fonts = {
  heading: `'Sriracha', 'Noto Sans JP'`,
  body: `Noto Sans JP`,
};

const theme = extendTheme({
  colors,
  styles,
  fonts,
});

export default theme;
