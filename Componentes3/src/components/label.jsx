import React from "react";
import "./label.css"
import { useState } from "react";

function Label({card}){
    const [showSubLabel, setSubLabel] = useState(true)

    const toggle = () => {
        setSubLabel(!showSubLabel)
    }

    return (
        <div className="Label"><h1 className="text" onClick={toggle}><span>Label</span>{showSubLabel ? "🢂" : "🢃"}</h1>
            <h2>{showSubLabel ? "" : card.description}</h2>
        </div>
    )
}

export default Label
