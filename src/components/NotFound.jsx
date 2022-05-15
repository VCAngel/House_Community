import React from 'react';
import {
    Box,
    Heading,
    Text,
    Image,
    Divider,
    Button
} from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai'

export default function NotFound() {
    return (
        <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
            <Box boxSize="2xl" h="fit-content" boxShadow="md" p="6" rounded="md" display="grid" gridAutoFlow="column" gap={5}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Image boxSize="300px" objectFit="contain" src="https://www.seekpng.com/png/full/11-114041_sad-face-emoji-clipart-android-sad-face-emoji.png" alt="sad face" />
                </Box>
                <Divider orientation="vertical" />
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="4">
                    <Box align="center">
                        <Heading as='h1' size="3xl" pb={4}>¡Oh no!</Heading>
                        <Heading as="h2" size="lg">La página no existe...</Heading>
                    </Box>
                    <Text fontSize="md">Usa el botón para volver a la página principal</Text>
                    <Button colorScheme="green" leftIcon={<AiFillHome />}>Inicio</Button>
                    {/* TODO ROute to home page*/}
                </Box>
            </Box>
        </Box>
    )
}