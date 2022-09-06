import React from 'react'
import * as C from './homeStyles'

function Sobre() {
  return (
    <C.Sobre id='home'>
      <div>
        <h3 className='ola'>Olá</h3>
        <h1>Sou <span>Lucas V. Ferreira</span></h1>
        <h3>Desenvolvedor Front End</h3>
        <div className='link'>
          <a href='#contact'>Contrate-me</a>
        </div>
      </div>
    </C.Sobre>
  )
}

export default Sobre