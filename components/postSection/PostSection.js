import React from 'react';

import {
    Header,
    Button
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
                interval={10000} // 10s
            >
                <div>
                    <img src="static/images/carousel/1_img_pillola.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> U=U: POSITIVO, MA NON INFETTIVO </a>
                        </Header>
                        <p className='post-text'>
                            “Se una persona sieropositiva assume con regolarità la <b>terapia anti-HIV</b>,
                            può essere considerata <b>non a rischio di contagio</b> in quanto la replicazione virale nel suo sangue e
                            nei suoi liquidi sessuali viene totalmente bloccata dalla terapia<big><sup>*</sup></big>. < br />
                            <b>Ama con Sapienza!</b>” <br />
                            <big><sup>*</sup></big> <small>Linee Guida Italiane 2017</small>
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/carousel/2_img_pillola.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> TEST HIV? </a>
                        </Header>
                        <p className='post-text'>
                            “Un semplice test sul sangue o sulla saliva può salvare la tua vita e quella dei tuoi partner.
                            Sapere precocemente di essere sieropositivo e iniziare la terapia <b>blocca</b> la progressione in AIDS.
                            Puoi vivere una vita normale e non trasmettere l’HIV.<br />
                            <b>Ama con Sapienza!</b>”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/carousel/3_img_pillola.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> CONDOM? </a>
                        </Header>
                        <p className='post-text'>
                            “L’uso corretto del preservativo (maschile e femminile) protegge dal rischio di infezione da HIV durante ogni tipo di rapporto sessuale.
                            Il condom deve essere utilizzato fin dall’inizio del rapporto.
                            E’ l’<b>unico anticoncezionale</b> che protegge da tutte le malattie sessualmente trasmesse.<br />
                            <b>Ama con Sapienza!</b>”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/carousel/4_img_pillola.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> PEP: COSA FARE DOPO? </a>
                        </Header>
                        <p className='post-text'>
                            “Se hai avuto un rapporto ad alto rischio di contagio HIV, rivolgiti ad un Centro di Malattie Infettive entro 24-48 ore:
                            puoi iniziare, se indicato, una profilassi post-esposizione, detta PEP ed evitare di contrarre l’HIV.<br />
                            <b>Ama con Sapienza!</b>”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/carousel/5_img_pillola.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> PreP: COSA FARE PRIMA? </a>
                        </Header>
                        <p className='post-text'>
                            “Se pensi di avere rapporti con più di un partner occasionale in 3 mesi, non riesci a usare il condom,
                            usi sostanze psicoattive (CHEM), puoi evitare di contrarre l’HIV assumendo una
                            <b>terapia pre-esposizione</b>, detta PreP, prescritta dal medico.<br />
                            <b>Ama con Sapienza!</b>”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/carousel/6_img_pillola.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> TEST and TREAT: COSA FARE IN GRAVIDANZA? </a>
                        </Header>
                        <p className='post-text'>
                            “Se sei in gravidanza, effettua sempre il test HIV. Se è positivo, inizia subito la terapia anti-HIV,
                            concorda il tipo di parto e il tipo di allattamento con il medico, così da bloccare la trasmissione di HIV al tuo bambino.<br />
                            <b>Ama con Sapienza!</b>”
                        </p>
                    </div>
                </div>
                <div>
                    <img src="static/images/carousel/7_img_pillola.jpg" />
                    <div className='post-content'>
                        <Header sub textAlign='center'>
                            <a className='section-title post-title'> MATERIALE INFORMATIVO </a>
                        </Header>
                        <p className='post-text'>
                            <a href="https://drive.google.com/open?id=1Z_x7wx2O4NxqB_m6q553TG-Rb8pyzIgN" target='_blank'>
                                <Button primary> APPROFONDISCI </Button>
                            </a>
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}