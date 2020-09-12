import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../../logo.png'

export const NavBar = () => {
    return (
        <nav className = "navbar navbar-expand-sm navbar-dark bg-dark" >

            <Link
                className="navbar-brand"
                to="/"
            >
                <img src={logo} alt='Tu Kiosco'/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/TuQuiosko"
                    >
                        Precios
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/InventarioApp"
                    >
                        Inventario
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    {/* <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/Login"
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}

