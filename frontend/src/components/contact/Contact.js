import React, {useState} from 'react'
import './contact.css'
import {MdEmail} from "react-icons/md";

export default function Contact() {

    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    function sendEmail(){
        window.open(`mailto:test@example.com?subject=${subject}&body=${body}`);
    }

    return (

        <div id="contact" className="contact-container main-background">
            <div className="contact-content">
                <div className="flex-column icon-container">
                    <h3> Formulario para contato </h3>
                    <MdEmail className="icon-contact"></MdEmail>
                    <h4> Você sera redirecionado para seu email de escolha</h4>
                </div>

                <div className="inputs-espace">
                    <form className="flex-column" onSubmit={sendEmail}>
                            <div className="flex-column">
                                <label>
                                    Assunto:
                                </label>
                                <input
                                    className="inputs-contact"
                                    placeholder="Digite o assunto..."
                                    value={subject}
                                    onChange={ e => setSubject(e.target.value)}
                                />
                            </div>

                            <div className="input-text">
                                <label>
                                    Disserte sobre o assunto:
                                </label>
                                <textarea
                                    className="inputs-area-contact"
                                    placeholder="Descreva sobre o assunto..."
                                    value={body}
                                    onChange={ e => setBody(e.target.value)}
                                    rows="4"
                                    cols="50"

                                />
                            </div>


                            <button type="submit" className="input-btn"> Enviar</button>
                    </form>
                </div>



            </div>
        </div>
    )
}
