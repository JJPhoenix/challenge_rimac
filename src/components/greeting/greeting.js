import {useUsuario} from "../../context/UsuarioContext";

const Greeting = () => {
    const { usuario } = useUsuario();

    return(
        <div className="flex flex-col justify-items-center pt-3 md:pt-0">
            <div>
                <p className="md:text-center text-[30px] font-BR-sonoma-bold">{usuario ?
                    usuario.name
                 : ' ' } ¿Para quién deseas <hr className="border-0"/> cotizar?</p>
            </div>
            <div>
                <p className="md:text-center font-BR-sonoma pt-3">Selecciona la opción que se ajuste más a tus necesidades.</p>
            </div>
        </div>
    )
}

export default Greeting;
