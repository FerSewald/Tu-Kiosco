

export const LaOperacion = (precioCompra, recargo, cantidadP) => {

    const recargo1 = parseFloat(recargo / 100);
    const suma = precioCompra * recargo1 + precioCompra / cantidadP;

    return (
        suma 
        

    )

}
