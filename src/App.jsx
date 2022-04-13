import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from 'components/login/Login';
import Main from 'components/main/Main';
import './styles/normalize.css';
import './styles/app.css';


export default function App({ callback }) {
    // TODO figure out db connection and stuff
    const [logged, setLogged] = useState(!false);
    let links = ['Loading'];

    logged ?
        links = ['/', 'Anuncios', 'Pagos', 'Directorio', 'Contacto']
        : links = ['/', 'Contacto'];

    let routeComponents = links.map((link, key) => {
        if (!logged) {
            return <Route path={link.toLowerCase()} element={
                <Login logged={logged} setLogged={setLogged} links={links} />
            } key={key} />;
        }

        return <Route path={link.toLowerCase()} element={
            <Main view={link.toLowerCase()} logged={logged} setLogged={setLogged} links={links} />
        } key={key} />
    })
    // console.log(routeComponents)

    return (
        <div>
            <Routes>
                {routeComponents}
            </Routes>
        </div>
    )
}