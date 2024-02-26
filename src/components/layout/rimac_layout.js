import React from 'react';
import Header from "../header/rimac_header";
import Footer from "../footer/rimac_footer";

import backgroundImage from "../../public/img/back.png"

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Header/>
            <main className="flex-grow">
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;
