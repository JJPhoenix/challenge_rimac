import {createContext, useContext, useState} from "react";

const ProductoContext = createContext();
export const useProducto = () => useContext(ProductoContext);

export const ProductoProvider = ({ children }) => {
    const [producto, setProducto] = useState([]);

    const actualizarProducto = async (producto, tipo) => {
        let productoSeleccionado = producto;
        productoSeleccionado.tipo = tipo;
        setProducto(productoSeleccionado)
    };

    return (
        <ProductoContext.Provider value={{ producto , actualizarProducto}}>
            {children}
        </ProductoContext.Provider>
    );
}
