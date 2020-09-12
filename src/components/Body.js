import React from 'react';
import { CantidadProductos } from './CantidadProductos';
import logo from '../logo.png'; 

export const Body = () => {
    return (
            <div className='container-fluid p-0 pt-5'>
                <div className='container'>
                    <div className='row text-center pt-5'>
                        <div className='col-12'>
                            <img className='image img-fluid pb-2' alt='logo' src={logo}></img>
                        </div>
                    </div>
                    <CantidadProductos />
                </div>
            </div>
    )
}
