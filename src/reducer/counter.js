import * as ActionTypes from '../actionType/counter'

const initialState = {
    value: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COUNT:
            return Object.assign({}, state, {
                value: state.value + action.num
            });
        case ActionTypes.SUB_COUNT:
            return Object.assign({}, state, {
                value: state.value - action.num
            });
        default:
            return state
    }
};

export default reducer;