import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './ReportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        {/* Components in here! */}
        <App callback={console.log('Rendered app')}/>
    </React.StrictMode>);

reportWebVitals();