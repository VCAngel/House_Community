import React, { Component } from 'react';
import Header from 'components/header/Header';
import '../../styles/login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    fetchUser() {
        // TODO workout user fetching
        console.log('Fetching User');
    }

    render() {
        this.fetchUser()
        return (
            <main>
                <Header logged={this.props.logged} setLogged={this.props.setLogged} links={this.props.links} />

                <section className="login">
                    <div className="login__title">
                        <h1>House's Community</h1>
                    </div>
                    <div className="login__card">
                        <form className="form">
                            <label htmlFor="username">Correo Electrónico</label>
                            <input type="email" id="username" className="form__input" />
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" className="form__input" />
                            <button className="form__button">Iniciar Sesión</button>
                            <p className="form__msg">¿No tienes cuenta?
                                <a href="#"> Contáctanos</a>
                            </p>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}