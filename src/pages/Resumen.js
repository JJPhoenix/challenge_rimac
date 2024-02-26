import Layout from "../components/layout/rimac_layout";
import Stepper from "../components/stepper/rimac_stepper";
import {useUsuario} from "../context/UsuarioContext";
import {useProducto} from "../context/ProductoContext";

function Resumen(){
    const { usuario } = useUsuario();
    const { producto } = useProducto();

    return(
        <Layout>
            <Stepper step={2}/>
            <div className="pl-6 pe-6 md:p-0 pt-8">
                <div className="flex justify-center flex-col ms-8 me-8 md:ms-[180px] md:me-[180px]">
                    <div>
                        <p className="font-BR-sonoma-bold text-2xl">Resumen del seguro</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-[20px] overflow-hidden mt-4 p-4 shadow-sm flex flex-col p-8">
                        <div className="border-b-2 border-gray-300 mb-3 pb-3">
                            <p className="font-BR-sonoma-semi-bold text-[10px]">Precios calculados para:</p>
                            <div className="flex pt-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.1463 13.7647H18.2309C16.1102 13.7647 14.4 15.4756 14.4 17.5972V22H20.1691C22.2898 22 24 20.2891 24 18.1675V17.62C24 15.4756 22.267 13.7647 20.1463 13.7647Z" fill="#141938"/>
                                    <path d="M18.6 12.5882C20.2569 12.5882 21.6 11.2714 21.6 9.64706C21.6 8.02269 20.2569 6.70588 18.6 6.70588C16.9431 6.70588 15.6 8.02269 15.6 9.64706C15.6 11.2714 16.9431 12.5882 18.6 12.5882Z" fill="#141938"/>
                                    <path d="M7.8 10.2353C10.1196 10.2353 12 8.39176 12 6.11765C12 3.84353 10.1196 2 7.8 2C5.4804 2 3.6 3.84353 3.6 6.11765C3.6 8.39176 5.4804 10.2353 7.8 10.2353Z" fill="#141938"/>
                                    <path d="M14.4 13.3483C13.6788 12.8789 12.8134 12.5882 11.8758 12.5882H4.32721C1.94725 12.5882 0 14.399 0 16.6123V18.2442C0 20.3233 1.803 22 4.03873 22H12.1402V17.6853C12.1402 15.9416 13.0297 14.3767 14.4 13.3483Z" fill="#141938"/>
                                </svg>
                                <p className="font-BR-sonoma-semi-bold text-[20px] ps-3">{usuario ? usuario.name : ""} {usuario ? usuario.lastName : ""}</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-BR-sonoma-semi-bold">Responsable de pago</p>
                            <p className="uppercase">{usuario ? usuario.type_doc : ""} : {usuario ? usuario.doc : ""}</p>
                            <p>Celular : {usuario ? usuario.phone : ""}</p>
                        </div>
                        <div className="pt-3">
                            <p className="font-BR-sonoma-semi-bold">Plan elegido:</p>
                            <p>{producto ? producto.name : ""}</p>
                            <p>Costo del Plan: ${producto ? (producto.tipo.includes("para_ti") ? producto.price*95/100 : producto.price): ""} al mes</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Resumen;
