import React from 'react';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import Login from './components/Login';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import bgImage from './img/header.jpg';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  }
}

//TODO Figure out login and routing stuff

//! Webpage theme
const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* TODO Create routes for each link */}
      <Login />
    </ChakraProvider>
  );
}

//* Main component
//-> Used for routing to the other views
function Main() {
  // TODO Workout routing in main
  //? no styles in here, just routing

}

export default App;
