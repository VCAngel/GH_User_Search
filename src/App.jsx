import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './ReportWebVitals';
import Navbar from './components/navbar/Navbar';
import Container from './components/container/Container';
import './scss/app.scss';

ReactDOM.render(
    <React.StrictMode>
        <div>
            <Navbar></Navbar>
            <h1>GhUS</h1>
            <Container></Container>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();