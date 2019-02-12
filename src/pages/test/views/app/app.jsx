import React from 'react';
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Home from '../home/home.jsx';
import CommodityDetail from '../commodityDetail/commodityDetail.jsx';
import Login from '../login/login.jsx';

class App extends React.Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </Router>
        )


    }
}

export default App