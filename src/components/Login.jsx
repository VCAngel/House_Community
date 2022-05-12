import React from 'react';
import {
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
} from '@chakra-ui/react';
import Navbar from './Navbar';

import bgImage from '../img/header.jpg';

export default function Login({ logged, setLogged, routes }) {
    return (

        //TODO Navbar component
        <Box display="flex" flexDirection="column" h="100vh" bgImage={`url(${bgImage})`} bgPosition="center" bgRepeat="no-repeat">
            <Navbar links={routes}/>

            <Box display="flex" flex={1} alignItems="center" justifyContent="center">
                <Box display="grid" w="100%" gridTemplateColumns="repeat(2,1fr)">
                    <Heading m="auto auto" w="50%" size="2xl" overflowWrap="normal" whiteSpace="normal">House's Community</Heading>
                    <Box marginY={0} marginX="auto" p="2rem 3rem" bgColor="white" border="1px solid gray" borderRadius="2%">
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
    );
}