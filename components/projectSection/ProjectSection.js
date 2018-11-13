import React, { Component } from 'react';
import {
    Header,
    Container
} from 'semantic-ui-react';

import TabComponent from './../tabComponent/TabComponent';

import './project-section.css';

class ProjectSection extends Component {
    render() {
        return (
            <div>
                <a className="anchor" id="project-section" />
                <div style={{ paddingTop: 30 }}>

                    <Container style={{ paddingBottom: 40 }}>
                        <Header sub textAlign='center'>
                            <a className='section-title red'>IL PROGETTO </a>
                        </Header>
                        <Header className='section-header' size='huge'>Amare con sapienza</Header>

                        <p>
                            Amare con Sapienza è un'iniziativa a cura del della Sezione di Malattie Infettive del 
                            <b> Dipartimento di Sanità Pubblica e Malattie Infettive dell'Università “Sapienza”. </b> <br />
                            <b> È coordinata dal team di ricerca del Prof. Vincenzo Vullo, da anni impegnato nella lotta
                            all’infezione da HIV/AIDS. </b>
                        </p>
                        <p>
                            L'obiettivo del progetto, vincitore del bando <b> Digital Health 2017 </b>,
                            è valutare l'efficacia di digital ambient media nella prevenzione dell'infezione da HIV.
                        </p>
                    </Container>

                    <TabComponent onClickForTest={this.props.onClickForTest} />
                </div>
            </div>
        );
    }
}

export default ProjectSection;