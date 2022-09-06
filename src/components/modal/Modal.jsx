import React from 'react'
import * as C from './modalStyles'
import ReactModal from 'react-modal'

import { Projetos } from "../../data/projetos"



function Modal({ modal, set, pj }) {
    ReactModal.setAppElement("#root")

    function closeModal() {
        set(false)
    }

    return (
        <ReactModal
            isOpen={modal}
            overlayClassName="Overlay"
            className="mdl"
        >
            <C.Modal>
                <div className="portfolios_modal">
                    <C.Content className="portfolios_modal-content">
                        <div className="icon">
                            <h4 className="portfolios_modal-title">{Projetos[pj].title}</h4><i className="ri-stack-line button_icon pont"></i>
                        </div>
                        <i className="ri-close-fill portfolios_modal-close" onClick={closeModal}></i>
                        <div className="description-content">
                            <div className="portfolio-img">
                                <img className="modal-desktop" src={Projetos[pj].img} alt="print do site completo da Tribal Tattoo" />
                            </div>
                            <C.Data className="portfolio-data">
                                <div className="icon"><i className="ri-checkbox-circle-fill portfolios_modal-icon"></i>
                                    <h3> Descrição:</h3>
                                </div>
                                <p>Website desenvolvido durante o evento Next Level Week 6 da Rocketseat. </p>
                                <div className="portfolio_tech">
                                    <div className="icon">
                                        <i className="ri-hashtag portfolios_modal-icon"></i><h3>Tecnologias:</h3>
                                    </div>
                                    <article className="portfolio_tech-icon">
                                        <a className="button button--flex " href="#" target="_blank"> HTML </a>
                                        <a className="button button--flex" href="#" target="_blank"> CSS </a>
                                        <a className="button button--flex " href="#" target="_blank"> JavaScript </a>
                                        <a className="button button--flex " href="#" target="_blank"> Swiper JS </a>
                                        <a className="button button--flex" href="#" target="_blank"> ScrollReveal</a>
                                    </article>
                                </div>
                            </C.Data>
                        </div>
                        <div className="portfolio_button">
                            <a href={Projetos[pj].github} target="_blank" className="button button--white">
                                <i className="ri-github-fill button_icon"></i> Github</a>
                            <a href={Projetos[pj].link} target="_blank" className="button button--flex button--white">
                                <i className="ri-eye-fill button_icon"></i> Demo</a>
                        </div>
                    </C.Content>
                </div>
            </C.Modal>
        </ReactModal>
    )
}

export default Modal