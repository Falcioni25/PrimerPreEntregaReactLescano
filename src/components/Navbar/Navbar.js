import React from "react";
import logo from "../../assets/logo.png"
import "./Navbar.css"


import { Category } from "@mui/icons-material";
const Navbar = ({children}) => {

    const categories = [
    { id: 0, name: "Categorias" },
    { id: 1, name: "Favoritos" },
    { id: 2, name: "Ayuda" },
    { id: 3, name: "Sobre Nosotros" }
];
    return (
    
        <>

        <div className="contenedor">
            <img src={logo} alt="icono" />
            <h1>Shopping en Linea</h1>
            <nav>
                {
                categories.map((category)=>{
                    return <a href="">{category.name}</a>
                })
            }
            </nav>

    {children}
                  
        </div>
        </>
    )
}

export default Navbar