import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Login } from "../Login";
import { RouterApp } from "./RouterApp";



export const SecondoRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/Login" component={Login} />
                    <Route path="/" component={RouterApp} />
                </Switch>
            </div>
        </Router>
    );
}