import React from 'react'
import Global from './styles/Global'
import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Portfolio from './components/potfolio/Portfolio'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Global/>
      <Header/>
      <Home/>
      <Sobre/>
      <Skills/>
      <Portfolio/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App