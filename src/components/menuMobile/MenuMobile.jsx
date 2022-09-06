import React, { useState } from 'react'
import * as C from './mobile'

function MenuMobile({ appear }) {

    return (
        <C.Menu right={appear}>
            <C.MenuList>
                <a href="#home" className="links"><li>Home</li></a>
                <a href="#about" className="links"><li>Sobre</li></a>
                <a href="#skils" className="links"><li>Conhecimentos</li></a>
                <a href="#projetos" className="links"><li>Projetos</li></a>
                <a href="#contact" className="links"><li>Contato</li></a>
            </C.MenuList>
        </C.Menu>
    )

    
}

export default MenuMobile
