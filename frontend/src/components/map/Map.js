import React, {useState, useEffect} from 'react'
import './map.scss';
import mapService from "./map-service";

import {IoArrowBackCircle, IoArrowDownCircleSharp} from "react-icons/io5";
import {FaSyringe} from "react-icons/all";

import mapa from '../../assets/mapa0.png';
import biguaVac from '../../assets/vacina-biguacu.png';
import joseVac from '../../assets/vacina-saojose.png';
import palhocaVac from '../../assets/vacina-palhoca.jpg';
import floripaVac from '../../assets/vacina-floripa.jpeg';

export default function Map() {

    const [biguacu, setBiguacu] = useState('');
    const [palhoca, setPalhoca] = useState('');
    const [saoJose, setSaoJose] = useState('');
    const [floripa, setFloripa] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [currentVacinationCity, setVacinationCity] = useState('');
    const [show, setShow] = useState('');
    const [showVac, setShowVac] = useState('');
    const [showMap, setShowMap] = useState(false);

    useEffect(    () => {
            mapService().then( data => {
                setBiguacu(data.biguacu);
                setPalhoca(data.palhoca);
                setSaoJose(data.saoJose);
                setFloripa(data.floripa);
            })
        }, []);

    function setCity(value){
        switch(value){
            default:
                setCurrentCity(biguacu);
                setShow("infosCard-show");
                setVacinationCity(biguaVac);
                break;

            case "biguacu":
                setCurrentCity(biguacu);
                setShow("infosCard-show");
                setVacinationCity(biguaVac);
                break;
            case "floripa":
                setCurrentCity(floripa);
                setShow("infosCard-show");
                setVacinationCity(floripaVac);
                break;
            case "palhoca":
                setCurrentCity(palhoca);
                setShow("infosCard-show");
                setVacinationCity(palhocaVac);
                break;
            case "saoJose":
                setCurrentCity(saoJose);
                setShow("infosCard-show");
                setVacinationCity(joseVac);
                break;
        }

    }

    function CardValues(props){
        return(
            <div className="cardValues-box">
                <span>{props.title}</span>
                <h3>{props.info}</h3>
            </div>
        )
    }

    function CardPercentages(props) {

        return (
            <div>
                <span>{props.title}</span>
                <h3>
                    %{props.value}
                </h3>
            </div>
        )
    }

    function RenderCard(props) {
        return(
            <div className="rendercard-container">
                <h3>{props.city}</h3>

                <div className="rendercard-row1">
                    <CardValues title="Casos confirmados" info={currentCity.last_available_confirmed}></CardValues>
                    <CardValues title="Casos recentes" info={currentCity.new_confirmed}></CardValues>
                    <CardValues title="Mortes confirmadas" info={currentCity.last_available_deaths}></CardValues>
                </div>

                <div className="rendercard-row2" >
                    <CardPercentages title="Taxa de mortalidade" value={currentCity.last_available_death_rate}></CardPercentages>
                </div>

                <button type="submit" id="hidePainel-btn" onClick={()=> setShow(" ")}>
                    <IoArrowBackCircle ></IoArrowBackCircle>
                </button>

                <div className="vacination-position flex-column">
                    <span>Vacinação</span>
                    <button id="show-vacination-dates-btn" onClick={() => setShowVac("infosVacCard-show")}>
                        <FaSyringe></FaSyringe>
                    </button>
                </div>

                <label className="warning-label"> Informações retiradas da secretaria de saude do respectivo municipio.</label>
            </div>
        )
    }

    function RenderVacCard() {
        return (
            <div>
                    <img alt="vacination-banner" src={currentVacinationCity}/>
                    <button id="hide-vacination-dates-btn" onClick={() => setShowVac("")}>
                        <IoArrowBackCircle></IoArrowBackCircle>
                    </button>
            </div>
        )
    }


    return (
        <div id="map" className="container flex main-background">
            <div className="map-content">

                <div >
                    <h1>
                        Mapa Informativo
                    </h1>
                </div>

                <p>
                   <b>Clique</b> em sua cidade no <b>mapa</b> e se antene sobre a situação do covid em sua cidade!
                </p>
                <h3>Mostrar mapa</h3>

                <button type="submit" id="showmap-btn" onClick={()=> setShowMap(!showMap)}>
                    <IoArrowDownCircleSharp></IoArrowDownCircleSharp>
                </button>

                <div className={`map-container ${showMap ? 'showMap' : ''}`}>
                    <img src={mapa} alt="logo"/>

                    <button type="submit" id="biguacu-btn" onClick={()=> setCity("biguacu")}>Biguaçu</button>
                    <button type="submit" id="floripa-btn" onClick={()=> setCity("floripa")}>Florianopolis</button>
                    <button type="submit" id="palhoca-btn" onClick={()=> setCity("palhoca")}>Palhoça</button>
                    <button type="submit" id="saoJose-btn" onClick={()=> setCity("saoJose")}>São Jose</button>

                    <div className={`infosCard ${show}`}>
                        <RenderCard city={currentCity.city}></RenderCard>
                    </div>

                    <div className={`infosVacCard ${showVac}`}>
                        <RenderVacCard></RenderVacCard>
                    </div>

                </div>
            </div>
        </div>
    )
}
