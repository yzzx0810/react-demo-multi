import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    render() {
        const {value, onIncreaseClick} = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )

    }
}

// Counter.prototype = {
//     value: PropTypes.number.isRequired,
//     onIncreaseClick: PropTypes.func.isRequired
// };

export default Counter