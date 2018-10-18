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
            <div style={{ paddingTop: 30, backgroundColor: '#eee' }}>

                <Container style={{ paddingBottom: 40 }}>
                    {/* <ScrollableAnchor id={'project'} > */}
                    <Header sub textAlign='center'>
                        <a className='section-title'>IL PROGETTO </a>
                    </Header>
                    {/* </ScrollableAnchor> */}
                    <Header className='project-title' size='huge'>Amare con sapienza</Header>

                    <p>
                        Amare con Sapienza è <b>un'iniziativa a cura del Dipartimento di Malattie Infettive
                        e Sanità Pubblica dell'Università Sapienza.</b></p>
                    <p>
                        L'obiettivo del progetto, <b>vincitore delbando Digital Health 2017</b>,
                        è valutare l'efficacia di digital ambient media nella prevenzione dell'infezione da HIV.
                    </p>
                </Container>

                <TabComponent></TabComponent>

            </div>
        );
    }
}

export default ProjectSection;