import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './ReportWebVitals';
import Navbar from './components/navbar/Navbar';

ReactDOM.render(
    <React.StrictMode>
        <h1>Hello world!</h1>
        <Navbar></Navbar>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();