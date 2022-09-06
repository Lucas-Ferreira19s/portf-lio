import React, {useState} from 'react'
import * as C from './portfolioStyles'

import {Projetos} from '../../data/projetos'
import Modal from '../modal/Modal'

function Portfolio() {

    const [modalisOPen, setIsOpen] = useState(false);
    const [pjModal, setModal] = useState(0)

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div>
            <Modal modal={modalisOPen} set={setIsOpen} pj={pjModal}/>
            <C.Container id="projetos">
                <div className='title'>
                    <h2 className="section_title">Projetos</h2>
                </div>
                <C.gridPort>
                    {Projetos.map((item, index)=>(
                        <div className="portfolios_content" key={index}>
                            <div>
                                <img className="portfolio_img" src={item.img} alt="print do site Tribal Tattoo" />
                                <div className="icon">
                                    <i className={item.icon}></i><h3 className="portfolios_title"> {item.title} </h3>
                                </div>
                            </div>
                            <span className="portfolios_button" onClick={()=> (
                                setModal(index),
                                openModal()
                            )}>
                                Ver detalhes <i className="ri-arrow-right-line"></i>
                            </span>
                        </div>
                    ))

                    }
                </C.gridPort>
                <C.gridGitHub>
                    <div className="github_data">
                        <h3 className="portfolios_title github_title"> <span>#</span>Outros projetos estão no Github.</h3>
                        <div className="button-github">
                            <a href="https://github.com/Lucas-Ferreira19s" target="_blank" className="button button--flex button--white card-wavy">
                                Repositório Github <i className="ri-github-fill"></i>
                            </a>
                            <div className="wavy wavy-1"></div>
                            <div className="wavy wavy-2"></div>
                        </div>
                    </div>
                </C.gridGitHub>
            </C.Container>
        </div>
    )
}

export default Portfolio