import {createStore} from 'redux';

import counterReducer from '../reducer/counter';

const store = createStore(counterReducer);

export default store;

