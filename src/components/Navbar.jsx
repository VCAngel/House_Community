import React from 'react';
import { Outlet, Link as RouteLink } from 'react-router-dom';
import {
    Box,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react';

export default function Navbar({ links }) {
    if (links.includes("/"))
        links.shift();

    return (
        <header>
            <Box mt="1.2rem" mb="1.2rem" display="flex" alignItems="center" justifyContent="space-around">
                <Link as={RouteLink} to="#">House's Community</Link>

                <List display="flex" alignItems="center" justifyContent="space-between" gap="1rem">
                    {links.map((link, index) => <Navlink page={link} key={index} />)}
                    <Outlet />
                </List>
            </Box>
        </header>
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