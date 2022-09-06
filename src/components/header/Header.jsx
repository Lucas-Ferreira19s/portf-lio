import * as C from "./stylesHeader"

import React, { useState } from 'react'
import MenuMobile from "../menuMobile/MenuMobile"

function Header() {

    const [menuOpen, setMenu] = useState(false)

    const Mobile = () => {
        if (!menuOpen) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

    return (
        <C.Header >
            <C.navList>
                <div className="logo"><a href="#"><span>#</span>Lucas</a></div>
                <C.listMenu>
                    <a href="#home"><li>Home</li></a>
                    <a href="#about"><li>Sobre</li></a>
                    <a href="#skils"><li>Conhecimentos</li></a>
                    <a href="#projetos"><li>Projetos</li></a>
                    <a href="#contact"><li>Contato</li></a>
                </C.listMenu>
                <div className={menuOpen ? "open menu-btn" : "menu-btn"} onClick={Mobile}>
                    <div className='menu-btn-burger'></div>
                </div>
                <MenuMobile appear={menuOpen}/>
            </C.navList>
        </C.Header>
    )
}

export default Header