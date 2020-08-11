import React from 'react';
import { CantidadProductos } from './CantidadProductos';
import logo from '../logo.png' 




const TuQuiosko = () => {
    return(<>
        <div className='container-fluid p-0 pt-5'>
            <div className='container'>
                <div className='row text-center pt-5'>
                    <div className='col-12'>
                        <img className='image img-fluid pb-2' alt='logo' src={logo}></img>
                    </div>
                </div>
                <CantidadProductos />
            </div>
            <footer>
                <h5 className='derechos'>By: Fernando sewald</h5>

            </footer>
        </div>
    </>
)


}

export default TuQuiosko;