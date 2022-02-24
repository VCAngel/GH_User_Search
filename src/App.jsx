import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './ReportWebVitals';
import Navbar from './components/navbar/Navbar';
import Container from './components/container/Container';
import './scss/app.scss';

ReactDOM.render(
    <React.StrictMode>
        <Navbar></Navbar>
        <Container></Container>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();