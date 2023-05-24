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
            <div className="Casilla" >{combo.name}<div className="flecha" onClick={toggle}>{showSubCasilla ? "🢂" : "🢃"}</div>
                <h2>{showSubCasilla ? "" : combo.description}</h2>
            </div>
            <div className="Casilla2" >{combo.name}<div className="flecha" onClick={toggle2}>{mostrarSubCasilla ? "🢂" : "🢃"}</div>
                <h2>{mostrarSubCasilla ? "" : combo.description}</h2>
            </div>
        </div>
    )
}

export default Casillas
