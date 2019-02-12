import React from 'react';
import styles from './scss/home.scss'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import CounterContainer from '../../../../containers/CounterContainer.js';

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
                <CounterContainer/>
                <Link to="/login">Go to login</Link>
                <div className={styles.main}>Hello, Welcome React...</div>
                <div style={{backgroundColor: "red", width: "400px"}}>Hello, Welcome React...</div>
                <span>{this.state.value}</span>
            </div>

        );
    }
}

export default Home