import React, { Component } from 'react';
import {
    Box,
    Heading,
    Input,
    Select,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Container,
    Button,
} from '@chakra-ui/react';

export default class Directorio extends Component {
    constructor(props) {
        super(props);
    }

    fetchData = (data) => {
        console.log("fetching")
    }

    render() {
        return (
            <Container as="main" maxW="70%" centerContent>
                <Heading p={5}>Directorio de Residencias</Heading>

                <Box w="100%" display="grid" gridTemplateColumns="repeat(4,1fr)" columnGap={3} mb={5}>
                    <Select placeholder="Buscar por..." gridColumn="1/2">
                        <option value="option2">Dirección de Propiedad</option>
                        <option value="option3">Dueño de Propiedad</option>
                        <option value="option1">Correo Electrónico</option>
                    </Select>

                    <Input gridColumn="2/5" type="text" />
                </Box>

                <TableContainer w="100%">
                    <Table variant="striped" colorScheme="gray" size="sm">
                        <TableCaption>
                            Personas registradas en nuestra base de datos
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Dirección</Th>
                                <Th>Dueño</Th>
                                <Th>E-mail</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {/* TODO Insert <Tr/>s from data in db */}
                            {this.fetchData()}
                            <Tr>
                                <Td>Calle Hola #6942</Td>
                                <Td>Ángel Vargas</Td>
                                <Td>vcangel00@gmail.com</Td>
                            </Tr>
                            <Tr>
                                <Td>Calle Adios #3265</Td>
                                <Td>Diana Ogaz</Td>
                                <Td>ogazdiana7@gmail.com</Td>
                            </Tr>
                        </Tbody>

                        <Tfoot>
                            <Tr>
                                <Th>Dirección</Th>
                                <Th>Dueño</Th>
                                <Th>E-mail</Th>
                            </Tr>
                        </Tfoot>

                        {/* TODO Various pages */}
                    </Table>
                </TableContainer>

                <Box display="flex">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                </Box>
            </Container>
        );
    }
}

//TODO Workout fetching data from db
//-> Display data in table