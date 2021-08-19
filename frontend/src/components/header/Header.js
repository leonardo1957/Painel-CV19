import React,{useState} from 'react';
import './header.scss';
import {FiMenu} from 'react-icons/fi';
import Contact from "../contact/Contact";

export default function Header() {
    const [navbarOn, setNavbarOn] = useState(false);
    const [contactOn, setContactOn] = useState(false);

    function toggleNavbar() {
        setNavbarOn(!navbarOn)
    }

    function toggleContact() {
        setContactOn(!contactOn)
    }

    return (
        <div className="main-container">

            <div className={`contact-hidden ${contactOn ? "contact-show" : ""}`}>
                <Contact></Contact>
                <button onClick={toggleContact} className="btn-close-contact"> X </button>
            </div>


            <header>
                <FiMenu onClick={toggleNavbar} className="icon" />

                <div className="flex links">
                    <p onClick={() => window.location.replace("/#map")} >Mapa</p>
                    <p onClick={() => window.location.replace("/#cautions")} >Cuidados</p>
                    <p onClick={() => window.location.replace("/#aboutus")}> Sobre o portal</p>
                    <p onClick={toggleContact}>Contato</p>
                </div>

                <div className={`navMenu ${navbarOn ? "navMenu-show" : ""}`}>
                    <button onClick={() => {window.location.replace("/#map"); toggleNavbar()}} className="btn-menu">Mapa</button>
                    <button onClick={() => {window.location.replace("/#cautions"); toggleNavbar()}} className="btn-menu">Cuidados</button>
                    <button onClick={() => {window.location.replace("/#aboutus"); toggleNavbar()}} className="btn-menu">Sobre o portal</button>
                    <button onClick={() => {toggleContact(); toggleNavbar()}} className="btn-menu">Contato</button>
                </div>



            </header>
        </div>
    )
}


/* para criar o header vou colocar uma tag header
um icon p puxar o side menu */
