import React, { Component } from "react";
import Navbar from './Navbar';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="HC-header">
                <div className="contenedor contenido-header">
                    <Navbar />
                </div>
            </header>
        )
    }
}