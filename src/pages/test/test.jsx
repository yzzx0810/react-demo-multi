import React from 'react';
import ReactDOM from 'react-dom';

let arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>,
];
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('root')
);

// export default Test;