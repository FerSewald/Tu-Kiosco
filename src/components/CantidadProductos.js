import React, { useState } from 'react'
import { useSuma } from '../hook/useSuma';

export const CantidadProductos = () => {

    const [show, setShow] = useState(false)

    const [valores, handleInputChange] = useSuma({
        cantidadP: '',
        precioCompra: '',
        recargo: '',
    });

    const { cantidadP, precioCompra, recargo} = valores;


    const recargo1 = parseFloat(valores.recargo / 100);
    const suma = valores.precioCompra * recargo1 + precioCompra / cantidadP;

    return (
        <>
            <form className=' text-center' >
                <div className='cantidad col-12 pt-3'>
                    <input
                        type="text"
                        name="cantidadP"
                        placeholder="N"
                        autoComplete="off"
                        value={cantidadP}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='pCompra col-12 pt-3'>
                    <input
                        placeholder='P. de compra'
                        type="text"
                        name="precioCompra"
                        autoComplete="off"
                        value={precioCompra}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='por col-12 pt-3'>
                    <input
                        placeholder='%'
                        type="text"
                        name="recargo"
                        autoComplete="off"
                        value={recargo}
                        onChange={handleInputChange}
                    />
                </div>
                

                <button
                    onClick={
                        (e) => {
                            setShow(!show);
                            e.preventDefault();
                        }
                    }
                    className='btn btn-info mt-3 col-12'>
                    Resultado
            </button>
            </form>

            {
                show &&
                <div className='resultado col-12 text-center pt-5'>
                    <h3 className='mostrar'>Total= {suma}</h3>
                </div>
            }
            
        </>
    )
}

