import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
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
  const [logged, setLogged] = useState(!false); //!
  let routes = ['/'];

  logged ?
    routes.push('Anuncios', 'Pagos', 'Directorio', 'Contacto')
    : routes.push('Contacto');

  let routeComponents = routes.map((route, key) => {
    if (!logged) {
      return <Route path={route.toLowerCase()}
        element={<Login logged={logged} setLogged={setLogged} routes={routes} />}
        key={key} />
    }

    return <Route path={route.toLowerCase()}
      element={<MainRouting view={route.toLowerCase()} logged={logged} setLogged={setLogged} routes={routes} />} />
  })

  return (
    <ChakraProvider theme={theme}>
      {/* TODO Create routes for each link */}
      <Routes>
        {routeComponents}
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    </ChakraProvider>
  );
}

//* Main component
//-> Used for routing to the other views
function MainRouting({ view, logged, setLogged, routes }) {
  const createView = (viewType) => {
    switch (viewType) {
      case "anuncios": return null
      case "pagos": return null
      case "directorio": return null
      case "contacto": return null
      default: return null
    }
  }
  const component = createView(view);


  return (
    <React.Fragment>
      <Navbar logged={logged} setLogged={setLogged} links={routes} />

      <main>
        {component}
      </main>
    </React.Fragment>
  );
}