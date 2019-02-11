import React from 'react';

class CommodityDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "456456"
        }
    }

    render() {
        return (
            <div>
                <span>{this.state.value}</span>
            </div>

        );
    }
}

export default CommodityDetail