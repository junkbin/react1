import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let firstName = "Kharghar";
const myelement = (<h1>ReactApp Element @{firstName}</h1>);
ReactDOM.render(myelement, document.getElementById('root'));
