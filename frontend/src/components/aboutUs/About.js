import React,{useState} from 'react'
import './about.css';


function RenderAboutCard(props) {

    return(
        <div className="card-container">
            <h2>
                {props.title}
            </h2>
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default function About() {
    const [show, setShow] = useState();

    function toggleAbout() {
        setShow(!show);
        window.location.replace("/#aboutus")
    }

    const aboutAuthors = "O grupo desenvolvedor desta plataforma é composto por três acadêmicos cursando a fase final do curso de graduação análise e desenvolvimento de sistemas, estamos unidos pois adotamos o mesmo ideal e plano para o desenvolvimento do TCC, buscando utilizar os ensinamentos e conteúdo da graduação para desenvolver um projeto que tivesse impacto social localmente, transformando tecnologia em um meio para combater a pandemia utilizando informação como arma!";
    const aboutWhy = "A ideia surgiu a partir de uma observação do cenário que nossa equipe e a população brasileira passava devido a pandemia gerada pelo vírus COVID-19, analisando a crise e isolamento que passamos, conseguimos destacar o fato das informações passadas sobre a atual situação que estamos expostos serem definitivas para agregar positivamente na linha de balanço ao combater o vírus.";
    const aboutSolution = "Assim avaliamos o projeto visando trazer neste portal informações verídicas diretamente das secretarias de saúde de cada município, apresentando estas informações de forma atrativa e dinâmica, para que a população possa se antenar a periculosidade do cenário que passamos e possa se prevenir, se informando sobre as datas de vacinas, assim transformando informação em poder de combate, trazendo resultados localmente!.";
    
    return (
        <div id="about" className="about-container main-background">

            <div className="about-content">
                <h3>Deseja saber mais sobre o painel?</h3>
                <button className="about-btn" onClick={toggleAbout}>Sobre nós</button>

                <div id="aboutus" className={`about-text ${show ? "about-show" : ""}`}>
                    <RenderAboutCard title="Sobre a equipe" text={aboutAuthors}/>
                    <RenderAboutCard title="Sobre a ideia" text={aboutWhy}/>
                    <RenderAboutCard title="Sobre o portal" text={aboutSolution}/>
                </div>

            </div>

        </div>
    )
}
