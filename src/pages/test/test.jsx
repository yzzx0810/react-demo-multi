import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from '../../store/test';

import Home from './views/home/home.jsx';


ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    document.getElementById('root')
);