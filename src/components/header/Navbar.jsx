import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const pages = [
        'Anuncios',
        'Pagos',
        'Directorio',
        'Contacto'
    ]

    return (
        <div className="barra">
            <a href="/">
                {/* <img src="img/logo.svg" alt="Logotipo de Bienes Raices"/> */}
                <p>House's Community</p>
            </a>

            <nav className="navegacion">
                {pages.map((page,index) => <Navlink page={page} key={index}/>)}
            </nav>
        </div>
    );
}

const Navlink = ({ page }) => {
    // TODO Figure out react router
    let link = `/${page.toLowerCase()}`
    return (
        <Link to={link}>{page}</Link>
    )
}