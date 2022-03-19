import React from "react";
import './css/Footer.scss'
import reload from './img/reload.png'
import setting from './img/settings.png'

export default function Footer({winner = false, reset, turn, toggle_menu}) {


    return (
        <div className={`footer-box ${winner ? 'winner' : ''}`}>
            <div onClick={reset}>
                <img src={reload} alt="reload icon"/>
            </div>
            <div>
                <span>{turn === 'x' ? 'player 1' : 'player 2'}</span>
            </div>
            <div onClick={toggle_menu}>
                <img src={setting} alt="setting icon"/>
            </div>
        </div>
    )
}