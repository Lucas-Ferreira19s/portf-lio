import React from 'react'

import * as C from './formStyles'

function Form() {
    return (
        <C.Container id="contact">
            <div className="container">
                <div className="section_heading">
                    <h2>Contato</h2>
                </div>
                <C.Contact>
                    <div className="container_contact">
                        <div className="contact_content">
                            <h4>Entrar em contato</h4>
                            <p>Entre em contato por E-mail</p>
                            <ul>
                                <li><span><i className="ri-whatsapp-fill"></i></span>(85) 9 81094944</li>
                                <li><span><i className="ri-mail-fill"></i></span>lucasdevfront@gmail.com</li>
                                <li><span><i className="ri-global-fill"></i></span>www.domain.com</li>
                                <li><span><i className="ri-map-pin-2-fill"></i></span>Brazil, Trairi-Ce</li>
                            </ul>
                        </div>
                    </div>
                    <C.Form >
                        <form action='lucasvasconcellos765@gmail.com' method='post' encType='text/plain'>
                            <input type="text" className="form-input" placeholder="Nome" name='nome' required />
                            <input type="email" className="form-input" placeholder="Email" name='email' required />
                            <textarea className="form-textarea" placeholder="Mensagem" name='mensagem' required ></textarea>
                            <input type="submit" value="Enviar mensagem" className="btn-1"></input>
                        </form>
                    </C.Form>
                </C.Contact>
            </div>
        </C.Container>
    )
}

export default Form