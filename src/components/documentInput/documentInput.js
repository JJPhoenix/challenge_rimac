import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useUsuario} from "../../context/UsuarioContext";
import {Alert} from "../alerta/alerta";
import {usePlanes} from "../../context/PlanesContext";

function DocumentInput() {
    const { actualizarUsuario } = useUsuario();
    const { cargarPlanes } = usePlanes();

    const [tipoDoc, setTipoDoc] = useState('');
    const [doc, setDoc] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [term1, setTerm1] = useState(false);
    const [term2, setTerm2] = useState(false);
    const [validar, setValidar] = useState(false);
    const [showAlert, setShowAlert] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'tipoDoc':
                setTipoDoc(value);
                break;
            case 'doc':
                setDoc(value);
                break;
            case 'cellphone':
                setCellphone(value);
                break;
            case 'term1':
                setTerm1(value);
                break;
            case 'term2':
                setTerm2(value);
                break;
            default:
                break;
        }
    };

    const cotizar = async () => {
        try {
            const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json");
            const datos = await response.json();
            if (tipoDoc !== "" && doc !== "" && cellphone !== "" && term1 && term2){
                await cargarPlanes();
                await actualizarUsuario(datos, tipoDoc, doc, cellphone, term1, term2).then(()=>{
                    setValidar(true)
                    const btn_cotizar = document.getElementById('btn_cotizar');
                    btn_cotizar.click();
                })
            } else {
                setShowAlert(true)
                setValidar(false)
            }
        } catch (error) {
            console.error("Error al obtener datos de la API:", error);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex md:hidden pb-4">
                <p className="font-BR-sonoma-semi-bold">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
            </div>
            <div className="flex ">
                <div className="flex items-center border border-[#5E6488] rounded-md w-full">
                    <select
                        name="tipoDoc"
                        value={tipoDoc}
                        onChange={handleInputChange}
                        className="mr-2 px-3 py-2 focus:outline-none focus:border-blue-500 bg-transparent">
                        <option value="">Tipo de Documento</option>
                        <option value="dni">DNI</option>
                        <option value="passport">Pasaporte</option>
                        <option value="license">Licencia de Conducir</option>
                    </select>
                    <div className="relative z-0 group mt-4 mb-4 border-l-2 border-gray-300">
                        <input type="text"
                               name="doc"
                               value={doc}
                               onChange={handleInputChange}
                               className="block py-2.5 px-0 text-sm text-gray-900  appearance-none focus:outline-none focus:ring-0 peer pl-4 w-40 md:w-96 bg-transparent" placeholder=" "/>
                        <label htmlFor="celular" className="absolute pl-4 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nro. de documento</label>
                    </div>
                </div>
            </div>
           <div className="flex items-center border border-[#5E6488] rounded-md w-full mt-5">
               <div className="relative z-0 group mt-4 mb-4">
                   <input type="text"
                          name="cellphone"
                          value={cellphone}
                          onChange={handleInputChange}
                          minLength={9}
                          maxLength={9}
                          className="block py-2.5 px-0 text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer pl-4 min-w-96" placeholder=" "/>
                   <label htmlFor="doc" className="absolute pl-4 text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular</label>
               </div>
           </div>
            <div className="inline-flex items-center mt-7">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name="term1"
                        value={term1}
                        onChange={handleInputChange}
                        className="form-checkbox h-6 w-6 rounded-full text-black focus:outline-none focus:ring-2 focus:accent-black checked:accent-black"
                    />
                    <span className="ml-2">Acepto la Política de Privacidad</span>
                </label>
            </div>
            <div className="inline-flex items-center mt-4">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name="term2"
                        value={term2}
                        onChange={handleInputChange}
                        className="form-checkbox h-6 w-6 rounded-lg text-black focus:outline-none focus:ring-2 focus:accent-black checked:accent-black checked:rounded-lg"
                    />
                    <span className="ml-2">Acepto la Política Comunicaciones Comerciales</span>
                </label>
            </div>
            <div className="inline-flex items-center mt-4">
                <a href="!#" className="cursor-pointer underline font-BR-sonoma-semi-bold">Aplican Términos y Condiciones</a>
            </div>
            <div className="inline-flex items-center mt-4 justify-center">
                <Link to={validar ? "/products" : "/"}>
                    <button className="rounded-full bg-black text-white px-4 py-2 focus:outline-none hover:bg-gray-900 transition-colors duration-300 pt-5 pb-5 pl-5 pr-5 w-[400px] md:w-36" id='btn_cotizar'
                            onClick={cotizar}>
                        Cotizar aquí
                    </button>
                </Link>
            </div>
            {showAlert && <Alert mensaje="Faltan llenar campos" onClose={() => setShowAlert(false)} />}
        </div>
    );
}

export default DocumentInput;
