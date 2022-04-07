import React from 'react';

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
                {pages.map(page => <Navlink page={page} />)}
            </nav>
        </div>
    );
}

const Navlink = ({ page }) => {
    // TODO Figure out react router
    return (
        <a href="#">{page}</a>
    )
}