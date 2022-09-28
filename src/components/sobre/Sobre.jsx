import React from 'react'
import * as C from './sobreStyles'
import cv from "../../assets/cv/Lucas V. Ferreira.pdf"
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
                        Sou desenvolvedor Front End, tenho 23 anos, desde o ano passado estudo programação,
                        atualmente estou aprimorando meus conhecimentos em React JS,
                        estou buscando e naturalmente curioso e trabalhando para melhorar minhas habilidades.
                    </p>
                    <p>
                        Este é meu Portfólio nele estão alguns de meus projetos, mas por favor não deixe de verificar
                        meu <a className='git-sobre' href='https://github.com/Lucas-Ferreira19s' target="_blank">GitHub</a>.
                    </p>

                    <div className='buttons'>
                        <a href='#contact' className='hire'>Contrate-me</a>
                        <a href={cv} download className='down'>Download CV</a>
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
                <img src={perfil} alt="Perfil" />
            </div>
        </C.container>
    )
}

export default Sobre