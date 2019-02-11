import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props);
    }

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
