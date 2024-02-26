import {createContext, useContext, useState} from "react";

const PlanesContext = createContext();
export const usePlanes = () => useContext(PlanesContext);

export const PlanesProvider = ({ children }) => {
    const [planes, setPlanes] = useState([]);

    // Función para cargar los datos desde la API
    const cargarPlanes = async () => {
        try {
            const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json");
            const data = await response.json();
            setPlanes(data.list);
        } catch (error) {
            console.error("Error al cargar los planes desde la API:", error);
        }
    };

    return (
        <PlanesContext.Provider value={{ planes, cargarPlanes }}>
            {children}
        </PlanesContext.Provider>
    );
};
