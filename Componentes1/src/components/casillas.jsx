import React from "react";
import "./casillas.css"
import { useState } from "react";

function Casillas({combo}){
    const [showSubCasilla, setSubCasilla] = useState(true)

    const toggle = () => {
        setSubCasilla(!showSubCasilla)
    }

    const [mostrarSubCasilla, editarSubCasilla] = useState(true)

    const toggle2 = () => {
        editarSubCasilla(!mostrarSubCasilla)
    }
    
    return (
        <div className="Casillero">
            <div className="Casilla" ><h1 className="text"><span>{combo.name}</span><span onClick={toggle}>{showSubCasilla ? "🢂" : "🢃"}</span></h1>
                <h2>{showSubCasilla ? "" : combo.description}</h2><h2>{showSubCasilla ? "" : <img src={combo.imagen}/>}</h2>
            </div>
            <div className="Casilla2" ><h1 className="text"><span>{combo.name}</span><span onClick={toggle2}>{mostrarSubCasilla ? "🢂" : "🢃"}</span></h1>
                <h2>{mostrarSubCasilla ? "" : combo.description}</h2><h2>{mostrarSubCasilla ? "" : <img src={combo.imagen}/>}</h2>
            </div>
        </div>
    )
}

export default Casillas
