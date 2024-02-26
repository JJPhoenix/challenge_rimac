const CardService = ({ imagen, titulo, contenido, seleccionada, onClick}) => {
    return (
        <div className={`bg-white shadow-lg rounded-[20px] overflow-hidden m-4 p-4 w-full shadow-sm cursor-pointer hover:shadow-2xl md:w-80 ${
            seleccionada ? 'border-2 border-black' : ''
        }`} onClick={onClick}>
            <div className="flex justify-end pb-3">
                {seleccionada ?
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 12C0.5 5.67614 5.67614 0.5 12 0.5C18.3239 0.5 23.5 5.67614 23.5 12C23.5 18.3239 18.3239 23.5 12 23.5C5.67614 23.5 0.5 18.3239 0.5 12Z" stroke="#C5CBE0" stroke-linecap="square"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0Z" fill="#389E0D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1813 7.11293C17.5607 7.434 17.6081 8.00188 17.287 8.38133L10.687 16.1813C10.5215 16.3769 10.2806 16.4927 10.0245 16.4996C9.76844 16.5066 9.52153 16.4042 9.34564 16.2179L5.94564 12.6179C5.60435 12.2566 5.62063 11.687 5.98199 11.3457C6.34336 11.0044 6.91297 11.0207 7.25427 11.382L9.96311 14.2502L15.9129 7.21863C16.234 6.83919 16.8019 6.79187 17.1813 7.11293Z" fill="white"/>
                    </svg> :
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 12C0.5 5.67614 5.67614 0.5 12 0.5C18.3239 0.5 23.5 5.67614 23.5 12C23.5 18.3239 18.3239 23.5 12 23.5C5.67614 23.5 0.5 18.3239 0.5 12Z" stroke="#A9AFD9" stroke-linecap="square"/>
                    </svg>
                }
            </div>
            <img src={imagen} alt={titulo} className="hidden md:block h-[48px]"/>
            <div className="flex md:hidden">
                <img src={imagen} alt={titulo} className="h-[32px]"/>
                <p className="text-xl font-BR-sonoma-bold ps-3">{titulo}</p>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-BR-sonoma-bold hidden md:block">{titulo}</h2>
                <p className="mt-2 text-gray-600">{contenido}</p>
            </div>
        </div>
    );
}

export default CardService;
