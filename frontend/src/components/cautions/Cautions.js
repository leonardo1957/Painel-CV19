import React from 'react'
import './cautions.css'
import mask from '../../assets/mask.png';
import aglomerar from '../../assets/aglomeration.png';
import alcool from '../../assets/alcool.png';
import cocar from '../../assets/scratch.png';
import lavar from '../../assets/clean.png';

function RenderIconCaution(props) {
    return(
        <div className="render-container">
            <img alt="cautions-icon" src={props.icon}/>
            <h3>{props.text}</h3>
        </div>
    )
}

export default function Cautions() {
    return (
        <div id="cautions" className="cautions-container main-background">
            <div className="cautions-content">
                <h2>
                    Ainda estamos na luta contra o <b>Covid-19 </b>
                    cuide-se, cuide do próximo e salve vidas
                </h2>

                <div>
                    <RenderIconCaution text="Use máscara" icon={mask}></RenderIconCaution>
                    <RenderIconCaution text="Evite aglomeraçoes" icon={aglomerar}></RenderIconCaution>
                    <RenderIconCaution text="Evite colocara mão no rosto" icon={cocar}></RenderIconCaution>
                    <RenderIconCaution text="Lave as mãos regularmente" icon={lavar}></RenderIconCaution>
                    <RenderIconCaution text="Alcool em gel de bolso" icon={alcool}></RenderIconCaution>
                </div>

            </div>
        </div>
    )
}
