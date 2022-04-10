import React, { Component } from 'react';

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
            <section className="login">
                <div className="login__title">
                    <h1>House's Community</h1>
                </div>
                <div className="login__card">
                    <form action="form">
                        <input type="text" className="form__input" />
                        <input type="text" className="form__input" />
                        <button className="form__button">Iniciar Sesión</button>
                        <p className="form__msg">¿No tienes cuenta?
                            <a href="#">Contáctanos</a>
                        </p>
                    </form>
                </div>
            </section>
        )
    }
}