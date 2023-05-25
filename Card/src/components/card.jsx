import React from "react";
import "./Card.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Card({}){
    return (
        <div className="container">
            <img src="images/GunsNRoses.png" />
            <p className="text">GUNS N ROSES</p>
            <p className="text">Guns N' Roses es una banda estadounidense de hard rock formada en Hollywood, Los Ángeles en la zona de Sunset Strip, en 1985. El grupo musical fue fundado por el vocalista Axl Rose y el guitarrista Izzy Stradlin.</p>
            <div className="button-container">
                <button className="button">Canciones</button>
                <button className="button">Álbumes</button>
                <button className="button">Integrantes</button>
            </div>
            <div>
                <h2>1985</h2>
                <h2><Link to="https://www.youtube.com/watch?v=Rbm6GXllBiw">Paradise City: </Link></h2>
                <h2><Link to="https://www.youtube.com/watch?v=o1tj2zJ2Wvg">Welcome to the jungle: </Link></h2>
            </div>
        </div>
    )
}

export default Card