import React from 'react';
import Header from '../header/Header';
import Anuncios from '../main/Anuncios';
import Pagos from '../main/Pagos';
import Directorio from '../main/Directorio';
import Contacto from '../main/Contacto';

export default function Main({ view, logged, setLogged, links }) {
    return (
        <div>
            <Header logged={logged} setLogged={setLogged} links={links} />

            <main>
                {renderView(view)}
            </main>
        </div>
    )
}

function renderView(viewType) {
    switch (viewType) {
        case "/": return <Anuncios />
            break;
        case "anuncios": return <Anuncios />
            break;
        case "pagos": return <Pagos />
            break;
        case "directorio": return <Directorio />
            break;
        case "contacto": return <Contacto />
            break;
        default: return <h1>La ruta no existe :(</h1>
    }
}