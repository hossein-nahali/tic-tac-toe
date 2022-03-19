import React from "react";
import logo from './img/hobbies-and-free-time.png'
import heart from './img/heart.png'
import './css/Header.scss'

export default function Header({is_active_menu, toggle_menu}) {
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <div className={`menu-icon ${is_active_menu ? 'active-sile-menu' : ''}`} onClick={toggle_menu}>
                <span/>
            </div>
            {is_active_menu &&
            <span className={`close-menu ${is_active_menu ? 'active-sile-menu' : ''}`}
                  onClick={() => toggle_menu(false)}/>}
            <div className={`side-menu ${is_active_menu ? 'active-sile-menu' : ''}`}>
                <p className="text-center">
                    Made with by <span><a href="https://t.me/nahali_dev" target="_blank"
                                          rel="noreferrer">Hossein Nahali</a><img
                    src={heart} alt="hart icon"/></span>
                </p>
            </div>
        </div>
    )
}