import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.links = []
    }

    customPages(logged) {
        logged ?
            this.links = [
                'Anuncios',
                'Pagos',
                'Directorio',
                'Contacto'
            ]
            : this.links = ['Contacto']
    }

    render() {
        this.customPages(this.props.logged);

        return (
            <header className="HC-header">
                <div className="contenedor contenido-header">
                    <Navbar links={this.links} />
                </div>
            </header>
        )
    }
}

function Navbar({ links }) {
    return (
        <div className="barra">
            <a href="/">
                {/* <img src="img/logo.svg" alt="Logotipo de Bienes Raices"/> */}
                <p>House's Community</p>
            </a>

            <nav className="navegacion">
                {links.map((link, index) => <Navlink page={link} key={index} />)}
            </nav>
        </div>
    );
}

const Navlink = ({ page }) => {
    // TODO Figure out react router
    let url = `/${page.toLowerCase()}`
    return (
        <Link to={url}>{page}</Link>
    )
}