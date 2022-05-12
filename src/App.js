import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Button,
  extendTheme,
} from '@chakra-ui/react';
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

//! Webpage theme
const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* TODO Create routes for each link */}
      <Box display="flex" flexDirection="column" h="100vh" bgImage={`url(${bgImage})`} bgPosition="center" bgRepeat="no-repeat">
        <header>

          <Box mt="1.2rem" mb="1.2rem" display="flex" alignItems="center" justifyContent="space-around">
            <Link href="#">House's Community</Link>
            <List display="flex" alignItems="center" justifyContent="space-between" gap="1rem">
              <ListItem>
                <Link href="#">Anuncios</Link>
              </ListItem>
              <Link href="#">Pagos</Link>
              <ListItem></ListItem>
              <Link href="#">Directorio</Link>
              <ListItem></ListItem>
              <Link href="#">Contacto</Link>
              <ListItem></ListItem>
            </List>
          </Box>
        </header>

        <Box display="flex" flex={1} alignItems="center" justifyContent="center">
          <Box display="grid" w="100%" gridTemplateColumns="repeat(2,1fr)">
            <Heading m="auto auto" w="50%" size="2xl" overflowWrap="normal" whiteSpace="normal">House's Community</Heading>
            <Box marginY={0} marginX="auto" p="2rem 3rem" bgColor="white" border="1px solid gray" borderRadius="1%">
              <FormControl display="flex" flexDirection="column" gap="1rem">
                <div>
                  <FormLabel htmlFor='email'>Correo Electrónico</FormLabel>
                  <Input id='email' type='email' />
                </div>
                <div>
                  <FormLabel htmlFor='password'>Contraseña</FormLabel>
                  <Input id='pasword' type='password' />
                </div>
                <Button w="100%" colorScheme="green">Iniciar Sesión</Button>
              </FormControl>

              <Divider mt="1rem" marginX="auto" />
              <Text align="center">
                ¿No tienes cuenta?{' '}
                <Link color="green" href="#">
                  Contáctanos
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
