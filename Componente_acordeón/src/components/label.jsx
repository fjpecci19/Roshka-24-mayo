import React from "react";
import "./label.css"
import { useState } from "react";

function Label({card}){
    const [showSubLabel, setSubLabel] = useState(true)

    const toggle = () => {
        setSubLabel(!showSubLabel)
    }

    return (
        <div className="Label"><h1 className="text"><span>{card.name}</span><span onClick={toggle}>{showSubLabel ? "╁" : "━"}</span></h1>
            <h2>{showSubLabel ? "" : card.description.map(item => {return <h2>{item}</h2>})}</h2>
        </div>
    )
}

export default Label
