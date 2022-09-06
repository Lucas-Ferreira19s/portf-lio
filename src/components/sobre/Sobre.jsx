import React from 'react'
import * as C from './sobreStyles'
import perfil from '../../assets/imgs/perfil.jpg'

import 'remixicon/fonts/remixicon.css'

function Sobre() {
    return (
        <C.container id='about'>
            <C.sobre>
                <div className='about'>
                    <h2>Sobre</h2>
                    <h4>Olá, Eu sou <span>Lucas.</span> Prazer em Conhecê-lo</h4>
                    <p>
                        Desde muito cedo sou apaixonado por tecnologia, então descobri o desenvolvimento Web. 
                        É hoje estou me qualificando para entra na área de denvolvimento Front. Estudando e 
                        consolidando meus conhecimentos para evoluir sempre na área, minha jornada está 
                        apenas começando.
                    </p>
                    <p>
                        Este é meu Portfólio nele está alguns de meus projetos, mas porfavor não deixe de verificar 
                        meu <a className='git-sobre' href='https://github.com/Lucas-Ferreira19s' target="_blank">GitHub</a>, 
                        para mais informações meu telefone e meu CV estão logo a baixo. Obrigado e fique vontade
                    </p> 
                    
                    <div className='buttons'>
                        <a href='#contact' className='hire'>Contrate-me</a>
                        <a href='#' className='down'>Download CV</a>
                    </div>
                </div>
                <C.card>
                    <div>
                        <span><i className="ri-phone-fill"></i></span>
                        <h5>Telefone</h5>
                        <p>(85) 9 81094944</p>
                    </div>
                    <div>
                        <span><i className="ri-mail-fill"></i></span>
                        <h5>Email</h5>
                        <p>lucasdevfront@gmail.com</p>
                    </div>
                </C.card>
            </C.sobre>
            <div className='perfil'>
                <img src={perfil}alt="Perfil" />
            </div>
        </C.container>
    )
}

export default Sobre