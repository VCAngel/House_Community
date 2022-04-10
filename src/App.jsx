import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from 'components/header/Header';
import Login from 'components/login/Login';
import Main from 'components/main/Main';
import './styles/normalize.css';
import './styles/app.css';

export default function App({ callback }) {
    // TODO figure out db connection and stuff
    const [logged, setLogged] = useState(false);

    return (
        <div>
            <Header />

            <Routes>
                {signIn(logged, setLogged)}
            </Routes>
        </div>
    )
}

const signIn = (state, setState) => {
    if (!state)
        return <Route path="/" element={
            <Login logged={state}
                setLogged={setState} />
        } />
    else
        return <Route path="/" element={<Main />} />
}