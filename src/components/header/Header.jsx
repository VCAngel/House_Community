import React, { Component } from "react";
import { Outlet, Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.links.includes("/"))
            this.props.links.shift()

        return (
            <header className="HC-header">
                <div className="contenedor contenido-header">
                    <Navbar links={this.props.links} />
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
                <Outlet />
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