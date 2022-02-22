import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './ReportWebVitals';
import Navbar from './components/navbar/Navbar';
import Container from './components/container/Container';

ReactDOM.render(
    <React.StrictMode>
        <div>
            <h1>GhUS</h1>
            <Navbar></Navbar>
            <Container></Container>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();