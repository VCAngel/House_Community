import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './ReportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        {/* Components in here! */}
        <BrowserRouter>
            <App callback={console.log('Rendered app')} />
        </BrowserRouter>
    </React.StrictMode>);

reportWebVitals();