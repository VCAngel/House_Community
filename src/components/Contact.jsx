import React from 'react';
import {
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
            <Box w="70%" m="0 auto" display="flex" flexDirection="column" gap={4}>
                <Box bgColor="teal" boxShadow="dark-lg" mt={4}>
                    {/* TODO Correct colors */}
                    <Heading p={5} align="center" color="white">Contáctanos</Heading>
                </Box>

                <Box bgColor="white" boxShadow="dark-lg">
                    <Heading fontSize="2xl" align="center" paddingY="3rem">Llena el formulario para contactarnos</Heading>

                    <FormControl as="form">
                        <FormControl as="fieldset">
                            <FormLabel as="legend">Información Personal</FormLabel>
                            <FormLabel htmlFor="contact_name">Nombre:</FormLabel>
                            <Input type="text" id="contact_name" placeholder="Ingresa tu nombre"></Input>
                            
                            <FormLabel htmlFor="contact_email">E-mail:</FormLabel>
                            <Input type="email" id="contact_email" placeholder="ejemplo@correo.com"></Input>
                            
                            <FormLabel htmlFor="contact_phone">Teléfono:</FormLabel>
                            <NumberInput id="contact_phone" placeholder="Tú teléfono">
                                <NumberInputField id="contact_phone" placeholder="Tú teléfono"/>
                            </NumberInput>
                            
                            <FormLabel htmlFor="contact_msg">Mensaje:</FormLabel>
                            <Textarea id="contact_msg" placeholder="Escribe tu mensaje" resize="None" />
                        </FormControl>
                    </FormControl>
                </Box>
            </Box>

        </Box>
    );
}

//TODO Implement contact method
//? phone/email