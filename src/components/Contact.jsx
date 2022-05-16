import React from 'react';
import {
    Container,
    Box,
    Heading,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    NumberInput,
    NumberInputField,
    Textarea,
    RadioGroup,
    Radio,
    Button,
} from '@chakra-ui/react';
import destacada2 from '../img/destacada2.jpg';

export default function Contact() {
    return (
        <Box as="main" bgImage={`url(${destacada2})`} flex={1} bgRepeat="no-repeat" bgPosition="center center" bgSize="cover">
            <Container maxW="70%" m="0 auto" display="flex" flexDirection="column" gap={4}>
                <Box bgColor="teal" boxShadow="dark-lg" mt={4}>
                    {/* TODO Correct colors */}
                    <Heading p={5} align="center" color="white">Contáctanos</Heading>
                </Box>

                <Box bgColor="white" boxShadow="dark-lg">
                    <Heading fontSize="2xl" align="center" paddingY="3rem">Llena el formulario para contactarnos</Heading>

                    <FormControl as="form" p={6}>
                        <FormControl as="fieldset" border="1px solid" borderColor="gray.200" borderRadius="5px" p={4}>
                            <FormLabel as="legend">Información Personal</FormLabel>
                            <FormLabel htmlFor="contact_name">Nombre:</FormLabel>
                            <Input type="text" id="contact_name" placeholder="Ingresa tu nombre" mb="1em"></Input>

                            <FormLabel htmlFor="contact_email">E-mail:</FormLabel>
                            <Input type="email" id="contact_email" placeholder="ejemplo@correo.com" mb="1em"></Input>

                            <FormLabel htmlFor="contact_phone">Teléfono:</FormLabel>
                            <NumberInput id="contact_phone" mb="1em">
                                <NumberInputField id="contact_phone" placeholder="Tú teléfono" />
                            </NumberInput>

                            <FormLabel htmlFor="contact_msg">Mensaje:</FormLabel>
                            <Textarea id="contact_msg" placeholder="Escribe tu mensaje" resize="None" mb="1em" />

                            <Box display="flex" justifyContent="end" paddingY={4}>
                                <Button colorScheme="green">Enviar</Button>
                            </Box>
                        </FormControl>
                    </FormControl>
                </Box>
            </Container>

        </Box>
    );
}

//TODO Implement contact method
//? phone/email