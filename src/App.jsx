import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './ReportWebVitals';
import './styles/normalize.css';
import './styles/app.css';

ReactDOM.render(
    <React.StrictMode>
        {/* Components in here! */}
        <h1>Hola</h1>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();