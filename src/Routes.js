import React , {Component} from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./App"
import Home from "./Home"

class Routes extends Component {
    render(){
        return(
            <div>
                <Router>
                    <Route path="/" exact= 'true' component={App}> </Route>
                    <Route path="/Home" component={Home}> </Route>
                </Router>
            </div>
        )
    }
}

export default Routes;