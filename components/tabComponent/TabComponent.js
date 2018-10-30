import React, { Component } from 'react';
import {
    Tab,
    Icon,
    Menu,
    Button,
    Container
} from 'semantic-ui-react';

import './tab-component.css';


class TabComponent extends Component {
    state = { activeIndex: 0 }

    componentDidMount() {
        this.panes = [
            /*
            {
                menuItem: (<div key='none' active="false" style={{ margin: '1%' }}></div>)
            },
            */
            {
                menuItem: (
                    <Menu.Item key='Mission'>
                        <div className='tab-title'> UN VIRUS "POSITIVO" </div>
                        {/* <Icon circular size='small' name='minus'></Icon> */}
                    </Menu.Item>
                ),
                render: () =>
                    <Tab.Pane>
                        <Container>
                            <div className="tab-content">
                                <p>
                                    Bloccare la diffusione dell’infezione da HIV <b>oggi</b> è possibile!
                                </p>
                                <p>
                                    Molti studi dimostrano che un tipo di <b>prevenzione combinata</b> è in grado
                                    di bloccare sensibilmente le nuove infezioni. <br />
                                    Per fare questo è necessario mantenersi costantemente aggiornati,
                                    documentarsi e informarsi, diffondendo il <b>virus della conoscenza!</b> <br />
                                    Il tuo compito è aiutare questo virus a replicarsi e a contagiare chi ti circonda:
                                    i tuoi amici, i tuoi compagni di corso, i tuoi docenti, il personale della tua facoltà.
                                </p>
                            </div>
                        </Container>
                    </Tab.Pane>
            },
            {
                menuItem: (
                    <Menu.Item key='Vision'>
                        <div className='tab-title'> COME DIFFONDERLO </div>
                        {/* <Icon circular size='small' name='plus'></Icon> */}
                    </Menu.Item>
                ),
                render: () =>
                    <Tab.Pane>
                        <Container>
                            <div className="tab-content">
                                <p>
                                    E' Semplice! <br />
                                    Clicca su <b>INIZIA IL GIOCO</b> e scegli tra uno o più quiz a disposizione.
                                </p>
                                <p>
                                    Trova e inserisci le lettere mancanti e approfondisci le principali tematiche. <br />
                                    In questo modo raggiungi il gradino più alto della conoscenza,
                                    implementi il contagio dell’informazione e sblocchi un piccolo tassello che consentirà
                                    una diffusione totale del “virus della conoscenza". <br />
                                    Puoi verificare gli effetti del tuo operato sulla scalinata monumentale del Rettorato,
                                    nel cuore della città universitaria, dove un’installazione si completerà gradualmente
                                    interagendo con ogni utente.
                                    Soltanto grazie a una corretta informazione il virus sarà anche virtù.
                                <br /> <br />
                                </p>
                                <a href='/tests' onClick={this.props.onClickForTest}>
                                    <Button primary> INIZIA IL GIOCO </Button>
                                </a>
                            </div>
                        </Container>
                    </Tab.Pane>
            }
        ];

    }

    handleTabChange = (e, { activeIndex }) => {
        this.setState({ activeIndex });
    }

    render() {
        const { activeIndex } = this.state;
        return (
            <Tab activeIndex={activeIndex} panes={this.panes} onTabChange={this.handleTabChange} />
        );
    }
}

export default TabComponent;