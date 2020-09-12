import React from 'react'
import { NavLink } from "react-router-dom";
import './home.css'
import logo from '../logo.png'


export const Home = () => {



    return (
        <>
            <div className='row align-content-center'>
                <div className='col-12 text-center pt-5'>
                    <img  className='logo' src={logo} alt='logo'/>
                </div>
            </div>
            <div className='row pt-4'>

            <div className='col-4'/>

                <div className='col-2 text-center '>
                    <NavLink to="/TuQuiosko">
                        <button className='btn btn-info bt' >Precios</button>
                    </NavLink>
                </div>

                <div className='text-center '>
                    <NavLink to="/InventarioApp">
                        <button className='btn btn-info bt' >Inventario</button>
                    </NavLink>                    
                </div>
            </div>
        </>
    )
}
