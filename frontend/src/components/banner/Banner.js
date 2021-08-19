import React from 'react';
import './banner.scss';
import Header from '../header/Header'
import {GiHealthNormal} from "react-icons/all";

export default function Banner() {
    return (
            <div className="banner-hero">
                <Header></Header>
                <div className="banner-text">
                    <h1>Unidos contra Covid!</h1>
                    <p> 
                        Portal  feito com o proposito de manter a população da região metropolitada
                        antenada de maneira dinamica sobre o Covid-19 em suas cidades!
                    </p>
                    <GiHealthNormal className='health-icon-position'></GiHealthNormal>
                </div>
            </div>
    )
}
