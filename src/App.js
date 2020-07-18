import React from 'react';
import './App.css';

//MUI Styles
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//MUI Components
import Button from '@material-ui/core/Button'
import orange from '@material-ui/core/colors/orange';


//Custom Components
import Appbar from './components/Appbar'
import MainDisplay from './components/MainDisplay'

//Theme
const theme = createMuiTheme({
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
      secondary: '#424242',
      light: 'rgba(66,66,66,0.3)'
    },
    blueButton: {
      border: '#2979ff',
      text: '#2962ff'
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
