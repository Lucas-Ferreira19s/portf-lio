import React from 'react'
import * as C from './skillsStyles'
import { skillList } from './skillsList'

function Skills() {
    return (
        <C.Container id='skils'>

            <div className='title'>
                <h2 className="section_title delaySmallReveal">Conhecimentos</h2>
            </div>

            <C.Card>
                {skillList.map((index, key) =>
                    <div key={key} className="skills_card delaySmallReveal" id="card">
                        <span className={index.class + " " + "card-border"}></span>
                        <div className={"circle"+key+" "+"circle"}>
                            <img className="skills_img" src={index.img} alt="html" />
                        </div>
                        <h3 className="card_title">{index.title}</h3>
                        <p className="card_description">{index.description}</p>
                    </div>  
                )}
            </C.Card>

        </C.Container>
    )
}

export default Skills