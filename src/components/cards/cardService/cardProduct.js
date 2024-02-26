import React from "react";
import home from "../../../public/img/home.png"
import clinic from "../../../public/img/clinic.png"
import {Link} from "react-router-dom";
export const CardProduct = ({titulo,precio, descripcion, onClick}) =>{
    return(
        <div className="bg-white ps-6 pe-6 shadow-lg rounded-[20px] overflow-hidden w-full shadow-sm cursor-pointer hover:shadow-2xl md:w-80 flex flex-col relative pt-8 mt-4 ms-4 me-4 min-h-[360px]">
            <div className="flex justify-between content-center">
                <div><p className="font-BR-sonoma-bold">{titulo ? titulo : ""}</p></div>
                <img src={titulo.includes('Clínica') ? clinic : home} alt="casa" className="h-[56px]"/>
            </div>
            <div className="pb-4 border-b-2 border-gray-300 mb-3">
                <p className="font-BR-sonoma-medium">Costo del plan</p>
                <p className="font-BR-sonoma-bold">${precio ? precio : ""} al mes</p>
            </div>
            <div className="pb-4">
                <ul className="list-disc p-6">
                    {descripcion ? descripcion.map((item, index) => (
                        <li key={index}>{item}</li>
                    )) : ""}
                </ul>
            </div>
            <div className="mt-auto px-4">
                <Link to="/resumen">
                    <button className="bg-[#FF1C44] py-2 w-full mb-4 rounded-lg text-white" onClick={onClick}>
                        Seleccionar Plan
                    </button>
                </Link>
            </div>
        </div>
    )
}
