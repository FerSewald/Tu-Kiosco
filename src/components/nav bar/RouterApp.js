import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";



import { Home } from '../Home';
import TuQuiosko from '../TuQuiosko';

import { InventarioApp } from '../Inventario/InventarioApp';
import { NavBar } from './NavBar';


export const RouterApp = () => {
    return (
        <Router>
        <div>
            <NavBar/>

            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/TuQuiosko"  component={TuQuiosko} />
                <Route exact path="/InventarioApp" component={InventarioApp} />


                <Redirect  to="/"/>
            </Switch>
            

        </div>
        </Router>
    )
}