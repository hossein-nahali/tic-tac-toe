import React from "react";
import './css/Box.scss'

export default function Box({children}) {

    return (
        <div className="box">
            {children}
        </div>
    )
}