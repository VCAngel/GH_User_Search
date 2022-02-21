import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './ReportWebVitals';
import Navbar from './components/navbar/Navbar';
import Container from './components/container/Container';

ReactDOM.render(
    <React.StrictMode>
        <h1>Hello world!</h1>
        <Navbar></Navbar>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();