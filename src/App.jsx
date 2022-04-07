import React from "react";
import Header from 'components/header/Header'
import './styles/normalize.css';
import './styles/app.css';

export default function App({ callback }) {
    let logged = false;
    // TODO figure out db connection and stuff

    return (
        <div>
            <Header logged={logged} />
        </div>
    )
}