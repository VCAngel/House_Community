import React from 'react';
import { Outlet, Link as RouteLink } from 'react-router-dom';
import {
    Box,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react';

export default function Navbar({ logged, setLogged, links }) {
    if (links.includes("/"))
        links.shift();

    return (
        <Box as="header" mt="1.2rem" mb="1.2rem" display="flex" alignItems="center" justifyContent="space-around">
            <Link as={RouteLink} to="/anuncios">House's Community</Link>

            <List display="flex" alignItems="center" justifyContent="space-between" gap="1rem">
                {links.map((link, key) => <Navlink page={link} key={key} />)}
                <Outlet />
            </List>
        </Box>
    );
}

function Navlink({ page }) {
    let url = `/${page.toLowerCase()}`;
    return (
        <ListItem>
            <Link as={RouteLink} to={url}>{page}</Link>
        </ListItem>
    )
}