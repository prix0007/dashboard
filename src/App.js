import React from 'react';
import './App.css';

//MUI Styles
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//MUI Components
import orange from '@material-ui/core/colors/orange';

import LatoWoff2 from './fonts/lato_regular.woff2';



//Custom Components
import Appbar from './components/Appbar'
import MainDisplay from './components/MainDisplay'

//
const lato = {
  fontFamily: 'Lato',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Lato'),
    local('Lato-Regular'),
    url(${LatoWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

//Theme
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lato, sans-serif'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [lato],
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#424242',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  customPalette: {
    primary: orange[500],
    primarySubtle: orange[300],
    secondary: '#8bc34a',
    background: {
      main: '#212121',
      secondary: '#1E2328',
      light: 'rgba(66,66,66,0.3)'
    },
    blueButton: {
      border: '#5151FF',
      text: '#9898FF'
    },
    white: {
      main: 'rgba(255,255,255,1)',
      light: 'rgba(255,255,255,0.7)'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Appbar />
        <MainDisplay />
      </div>
    </ThemeProvider>
  );
}

export default App;
