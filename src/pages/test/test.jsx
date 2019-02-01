import React from 'react';
import ReactDOM from 'react-dom';

const content = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>,
];
ReactDOM.render(
    <div>{content}</div>,
    document.getElementById('root')
);

// export default Test;