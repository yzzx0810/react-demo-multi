import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "123123"
        }
    }

    render() {
        return (
            <div>
                <p>Hello, Welcome React...</p>
                <span>{this.state.value}</span>
            </div>

        );
    }
}

export default Home