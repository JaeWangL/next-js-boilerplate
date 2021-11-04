import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export const breakPointsHeight = {
  iphone8Down: '(max-height: 666px)',
  iphone8PlusDown: '(max-height: 735px)',
  iphoneXDown: '(max-height: 811px)',
  iphone8PUp: '(min-height: 667px)',
  iphone8PlusUp: '(min-height: 736px)',
  iphoneXUp: '(min-height: 812px)',
};

export const breakPoints = {
  xsDown: '(max-width: 320px)',
  smDown: '(max-width: 575px)',
  mdDown: '(max-width: 767px)',
  lgDown: '(max-width: 991px)',
  xlDown: '(max-width: 1199px)',
  xxlDown: '(max-width: 1599px)',
  xxxlDown: '(max-width: 1999px)',
  xsUp: '(min-width: 321px)',
  smUp: '(min-width: 576px)',
  mdUp: '(min-width: 768px)',
  lgUp: '(min-width: 992px)',
  xlUp: '(min-width: 1200px)',
  xxlUp: '(min-width: 1600px)',
  xxxlUp: '(min-width: 2000px)',
};
