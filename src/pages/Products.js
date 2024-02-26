import Layout from "../components/layout/rimac_layout";
import Stepper from "../components/stepper/rimac_stepper";
import Greeting from "../components/greeting/greeting";
import CardService from "../components/cards/cardService/cardService";

import para_mi from "../public/img/para_mi.png"
import para_ti from "../public/img/para_ti.png"
import {useState} from "react";
import {usePlanes} from "../context/PlanesContext";
import {CardProduct} from "../components/cards/cardService/cardProduct";
import {useUsuario} from "../context/UsuarioContext";
import {useProducto} from "../context/ProductoContext";

function Products() {
    const [tipoServicio, setTipoServicio] = useState(null);
    const [showProduct, setShowProduct] = useState(null);

    const { planes } = usePlanes();
    const { usuario } = useUsuario();
    const { actualizarProducto } = useProducto()

    const handleClickTipoServicio = (titulo) => {
        setTipoServicio(titulo);
        setShowProduct(true)
    };

    const handleClickProduct = (producto) =>{
        actualizarProducto(producto, tipoServicio)
    }

    const listaDeObjetos = [
        {
            id: 1,
            imagen: para_mi,
            tipo: "para_mi",
            titulo: "Para mí",
            contenido: "Cotiza tu seguro de salud y agrega familiares si así lo deseas."
        },
        {
            id: 2,
            tipo: "para_ti",
            imagen: para_ti,
            titulo: "Para alguien más",
            contenido: "Realiza una cotización para uno de tus familiares o cualquier persona."
        },
    ];

    return (
        <Layout>
            <Stepper step={1}/>
            <div className="pl-6 pe-6 md:p-0">
                <Greeting/>
                <div className="pt-8 flex flex-col justify-center md:flex-row">
                    {listaDeObjetos.map((objeto) => (
                        <CardService
                            key={objeto.id}
                            imagen={objeto.imagen}
                            titulo={objeto.titulo}
                            contenido={objeto.contenido}
                            seleccionada={tipoServicio === objeto.tipo}
                            onClick={() => handleClickTipoServicio(objeto.tipo)}
                        />
                    ))}
                </div>
                <div className={`pt-8 ${showProduct ? 'flex' : 'hidden'} flex-col justify-center md:flex-row flex-wrap pb-4`}>
                    { usuario ?  (planes.map(plan => (
                        usuario.age <= plan.age ?
                            <CardProduct key={plan.name}
                                         titulo={plan.name}
                                         precio={plan.price}
                                         descripcion={plan.description}
                                         onClick={()=> {
                                             handleClickProduct(plan)
                                         }}
                            /> : ""
                    ))) :""}
                </div>
            </div>
        </Layout>
    );
}

export default Products;
