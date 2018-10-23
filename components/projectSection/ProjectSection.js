import React, { Component } from 'react';
import {
    Header,
    Grid,
    Container
} from 'semantic-ui-react';

import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor'

import TabComponent from './../tabComponent/TabComponent';

import './project-section.css';

class ProjectSection extends Component {
    render() {
        /*
        configureAnchors({ offset: -90, scrollDuration: 200 });
        goToAnchor('project', true)
        */
        return (
            <div>
                <a className="anchor" id="project-section" />
                <div style={{ paddingTop: 30 }}>


                    <Container style={{ paddingBottom: 40 }}>
                        {/* <ScrollableAnchor id={'project'} > */}
                        <Header sub textAlign='center'>
                            <a className='section-title'>IL PROGETTO </a>
                        </Header>
                        {/* </ScrollableAnchor> */}
                        <Header className='project-title' size='huge'>Amare con sapienza</Header>

                        <p>
                            Amare con Sapienza è un'iniziativa a cura del <b> Dipartimento di Malattie Infettive
                        e Sanità Pubblica</b> dell'Università Sapienza.</p>
                        <p>
                            L'obiettivo del progetto, <b>vincitore del bando Digital Health 2017</b>,
                            è valutare l'efficacia di digital ambient media nella prevenzione dell'infezione da HIV.
                    </p>
                    </Container>

                    <TabComponent></TabComponent>

                </div>

            </div>

        );
    }
}

export default ProjectSection;