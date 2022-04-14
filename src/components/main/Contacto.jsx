import React, { Component } from 'react';

export default class Contacto extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="fw-300 center-txt">Contacto</h1>
                <div className="center-img">
                    <img src="" alt="" />
                </div>

                <div className="contenedor seccion contenido-centrado">
                    <h3 className="center-txt fw-300">Llena el formulario de contacto</h3>
                    <Fieldset legend="Información Personal"
                        ids={['nombre', 'email', 'telefono', 'mensaje']}
                        labels={['Nombre:', 'E-mail:', 'Teléfono:', 'Mensaje:']}
                        inputTypes={['text', 'email', 'tel', 'textarea']}
                        placeholders={['Ingresa tu nombre', 'ejemplo@correo.com', 'Tu teléfono', 'Escribe tu mensaje']}
                    />

                    <input type="submit" value="Enviar" class="boton btn-verde" />

                </div>
            </React.Fragment>
        );
    }
}

function Fieldset({ legend, ids = ['text'], labels = ['text'], inputTypes = ['text'], placeholders = ['text'] }) {
    const fieldComponents = labels.map((label, i) => {
        let labelComp = <label htmlFor={ids[i]}>{label}</label>;
        let inputComp;

        if (inputTypes[i] === 'textarea')
            inputComp = <textarea id={ids[i]} placeholder={placeholders[i]} />
        else
            inputComp = <input type={inputTypes[i]} id={ids[i]} placeholder={placeholders[i]} />

        return (
            <React.Fragment>
                {labelComp}
                {inputComp}
            </React.Fragment>
        );
    })

    return (
        <fieldset>
            <legend>{legend}</legend>

            {fieldComponents}
        </fieldset>
    )
}