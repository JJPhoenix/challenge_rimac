import {createContext, useContext, useState} from "react";

const UsuarioContext = createContext();

export const useUsuario = () => useContext(UsuarioContext);

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    function calcularEdad(fechaNacimiento) {
        // Convertir la fecha de nacimiento a objeto Date
        const partesFecha = fechaNacimiento.split('-');
        const dia = parseInt(partesFecha[0], 10);
        const mes = parseInt(partesFecha[1], 10) - 1; // Los meses comienzan desde 0
        const anio = parseInt(partesFecha[2], 10);
        const fechaNacimientoObj = new Date(anio, mes, dia);

        // Obtener la fecha actual
        const fechaActual = new Date();

        // Calcular la diferencia de años
        let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

        // Ajustar la edad si aún no se ha cumplido el cumpleaños este año
        if (
            fechaNacimientoObj.getMonth() > fechaActual.getMonth() ||
            (fechaNacimientoObj.getMonth() === fechaActual.getMonth() && fechaNacimientoObj.getDate() > fechaActual.getDate())
        ) {
            edad--;
        }

        return edad;
    }

    const actualizarUsuario = async (datos,tipoDoc, doc,cellphone, term1, term2) => {
        datos.age = calcularEdad(datos.birthDay)
        datos.type_doc = tipoDoc
        datos.doc = doc
        datos.phone= cellphone
        datos.term1= term1
        datos.term2= term2
        setUsuario(datos);
    };

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
};
