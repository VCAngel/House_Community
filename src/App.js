import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import Login from './components/Login';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  }
}

//! Webpage theme
const theme = extendTheme({ colors })

export default function App() {
  //TODO figure out DB connection and stuff
  const [logged, setLogged] = useState(false);
  let routes = ['/'];

  logged ?
    routes.push('Anuncios', 'Pagos', 'Directorio', 'Contacto')
    : routes.push('Contacto');

  let routeComponents = routes.map((route, key) => {
    if (!logged) {
      return <Route path={route.toLowerCase()}
        element={<Login logged={logged} setLogged={setLogged} links={routes} />}
        key={key} />
    }
  })

  return (
    <ChakraProvider theme={theme}>
      {/* TODO Create routes for each link */}
      <Login routes={routes}/>
    </ChakraProvider>
  );
}

//* Main component
//-> Used for routing to the other views
function MainRouting() {
  // TODO Workout routing in main
  //? no styles in here, just routing
  return (
    <main>

    </main>
  );
}