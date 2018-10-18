import React, { Component } from 'react';
import {
    Tab,
    Icon,
    Menu,
    Button,
    Container
} from 'semantic-ui-react';

import './tab-component.css';

const panes = [
    {
        menuItem: (<div key='none' active="false" style={{ margin: '1%' }}></div>)
    },
    {
        menuItem: (
            <Menu.Item key='Mission'>
                <div className='tab-title'> UN VIRUS "POSITIVO" </div>
                <Icon circular size='small' name='minus'></Icon>
            </Menu.Item>
        ),
        render: () =>
            <Tab.Pane>
                <Container>
                    <div className="tab-content">
                        <p>
                            Da molto tempo è ormai possibile convivere con il virus dell'HIV
                            grazie a decenni di ricerche e sperimentazioni che hanno generato cure specifiche e risolutive.
                        </p>
                        <p>
                            Per continuare sulla giusta strada è necessario mantenersi costantemente aggiornati, documentarsi
                            ed informarsi. Infatti anche l'informazione è un "virus" estremamente positivo e in questo momento si sta diffondendo
                            all'interno dell'Università Sapienza. Il tuo compito non è sconfiggere il virus dell'informazione ma aiutarlo a riprodursi
                            e a contagiare chi ti circonda: i tuoi amici, i tuoi compagni di corso, i tuoi docenti, il personale della tua Facoltà.
                        </p>
                    </div>
                </Container>
            </Tab.Pane>
    },
    {
        menuItem: (
            <Menu.Item key='Vision'>
                <div className='tab-title'> COME DIFFONDERLO </div>
                <Icon circular size='small' name='plus'></Icon>
            </Menu.Item>
        ),
        render: () =>
            <Tab.Pane>
                <Container>
                    <div className="tab-content">
                        <p>
                            Clicca sul tasto "risolvi il test" e scegli tra uno o più quiz a disposizione. <br />
                            Trova e inserisci le lettere mancanti e approfondisci le principali tematiche.
                        </p>
                        <p>
                            In questo modeo puoi implementare il contagio dell'informazione e sbloccare un piccolo tassello per consentire
                            una diffusione del virus. Raggiungi il gradino più alto della conoscenza e verificane/ osserva la "reazione"
                            sulla scalinata munumentale del Rettorato, nel cuore della città universitaria.
                            <br /> <br />
                        </p>
                        <Button style={{ backgroundColor: '#df2c3f' }}>
                            <span className='button-text'> RISOLVI IL TEST </span>
                        </Button>
                    </div>
                </Container>
            </Tab.Pane>
    }
];


class TabComponent extends Component {
    state = { activeIndex: 1 }

    handleTabChange = (e, { activeIndex }) => {
        this.setState({ activeIndex });
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <Tab activeIndex={activeIndex} panes={panes} onTabChange={this.handleTabChange} />
        );

    }
}

export default TabComponent;