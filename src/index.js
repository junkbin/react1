import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let firstName = "Kharghar";
const myelement = (<h1>ReactApp Element @{firstName}</h1>);
const elem1 = (
    <div>
        <h1>ReactApp Element @{firstName}</h1>
        <App title="CBD"/>
        <App title="SEAWOOD"/>
        <App title="NERUL"/>
    </div>
);

function dynamicContent() {
    let ctime = new Date() + "";
    const delem = (
        <div>
            {ctime}
        </div>
    );
    ReactDOM.render(delem, document.getElementById('root2'));
};


ReactDOM.render(elem1, document.getElementById('root'));
ReactDOM.render(myelement, document.getElementById('root1'));

setInterval(dynamicContent, 1000);