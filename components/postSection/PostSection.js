import React from 'react';

import {
    Header

} from 'semantic-ui-react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './post-section.css';

export default () => {
    return (
        <div>
            <a className="anchor" id="post-section" />
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                emulateTouch={true}
            >
                <div>
                    <img src="static/images/img_pillole.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> U=U: POSITIVO, MA NON INFETTIVO </a>
                        </Header>
                        <p className='post-text'>
                            “Se una persona sieropositiva assume con regolarità la terapia anti-HIV,
                            può essere considerata non più infettiva in quanto la replicazione virale nel suo sangue e
                            nei suoi liquidi sessuali viene bloccata dalla terapia. <br />
                            Ama con sapienza!”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/img_pillole.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> TEST HIV? </a>
                        </Header>
                        <p className='post-text'>
                            “Un semplice test sul sangue o sulla saliva può salvare la tua vita e quella dei tuoi partner.
                            Sapere precocemente di essere sieropositivo e iniziare la terapia <b>blocca</b> la progressione in AIDS.
                            Puoi vivere una vita normale e non trasmettere l’HIV.<br />
                            Ama con sapienza!”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/img_pillole.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> CONDOM? </a>
                        </Header>
                        <p className='post-text'>
                            “L’uso corretto del preservativo (maschile e femminile) protegge dal rischio di infezione da HIV durante ogni tipo di rapporto sessuale. 
                            Il condom deve essere utilizzato fin dall’inizio del rapporto. 
                            E’ l’unico anticoncezionale che protegge da tutte le malattie sessualmente trasmesse.<br />
                            Ama con sapienza!”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/img_pillole.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> PEP: COSA FARE DOPO? </a>
                        </Header>
                        <p className='post-text'>
                            “Se hai avuto un rapporto ad alto rischio di contagio HIV, rivolgiti ad un Centro di Malattie Infettive entro 24-48 ore: 
                            puoi iniziare, se indicato, una profilassi post-esposizione, detta PEP ed evitare di contrarre l’HIV.<br />
                            Ama con sapienza!”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/img_pillole.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> PreP: COSA FARE PRIMA? </a>
                        </Header>
                        <p className='post-text'>
                            “Se hai rapporti con più di un partner occasionale in 3 mesi, non riesci a usare il condom, usi sostanze psicoattive (CHEM), 
                            puoi evitare di contrarre l’HIV assumendo una terapia pre-esposizione, detta PreP, prescritta dal medico.<br />
                            Ama con sapienza!”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/img_pillole.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> TEST and TREAT: COSA FARE IN GRAVIDANZA? </a>
                        </Header>
                        <p className='post-text'>
                            “Se sei in gravidanza, effettua sempre il test HIV. Se è positivo, inizia subito la terapia anti-HIV, 
                            concorda il tipo di parto e il tipo di allattamento con il medico, così da bloccare la trasmissione di HIV al tuo bambino.<br />
                            Ama con sapienza!”
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}