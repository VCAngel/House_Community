import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text
} from '@chakra-ui/react';

export default function Footer(props){
    return(
        <Box as="footer" paddingY={5} backgroundColor="gray" position="absolute">
            <Container centerContent>
                <Heading as="h4" fontSize="md">House's Community</Heading>
                <Text fontSize="sm">Todos los derechos reservados - 2022 ©</Text>
            </Container>
        </Box>
    );
}