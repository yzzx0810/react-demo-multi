import {connect} from 'react-redux';

import * as ActionTypes from '../actionType/counter.js';
import Counter from '../components/Counter.jsx';

const mapStateToProps = (state) => {
    return {
        value: state.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseClick: () => {
            dispatch({
                type: ActionTypes.ADD_COUNT,
                num: 2
            })
        },
        onDecreaseClick: () => {
            dispatch({
                type: ActionTypes.SUB_COUNT,
                num: 1
            })
        }

    }
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Counter);

export default CounterContainer;



