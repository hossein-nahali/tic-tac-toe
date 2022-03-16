import React, {useState} from "react";
import logo from './img/hobbies-and-free-time.png'
import './css/Header.scss'

export default function Header() {
    const [menu, setMenu] = useState(false);
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <div className={`menu-icon ${menu ? 'active-sile-menu' : ''}`} onClick={() => setMenu(!menu)}>
                <span/>
            </div>
            {menu && <span className={`close-menu ${menu ? 'active-sile-menu' : ''}`} onClick={() => setMenu(false)}/>}
            <div className={`side-menu ${menu ? 'active-sile-menu' : ''}`}>
            </div>
        </div>
    )
}