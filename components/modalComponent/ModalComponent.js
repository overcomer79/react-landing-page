import React, { Component } from 'react';

import {
    Modal,
    Button,
    Grid,
    Image
} from 'semantic-ui-react';

import './modal-component.css';

class ModalComponent extends Component {
    state = { open: false }

    componentDidMount() {
        this.setState({ open: true })
    }

    onClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { open } = this.state;

        return (
            <Modal
                closeOnEscape={false}
                size='mini'
                open={open}
                closeIcon
                onClose={this.onClose}
                closeOnPortalMouseLeave={false}
                className='modal'
            >
                <Modal.Content style={{padding:'1.5rem'}}>
                    <Grid>
                        <Grid.Row columns='two'>
                            <Grid.Column width={4}>
                                <Image src='static/images/icona_pop_up.png' size='small' style={{marginTop:'5px'}} />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <div className='modal-header'>
                                    Complimenti! < br />
                                    Hai appena contratto il virus dell'informazione!
                                </div>
                                <p className='modal-content'> 
                                    Diffondilo e anima l'installazione collocata
                                    sulla scalinata principale dell'Ateneo
                                    seguendo le nostre indicazioni.
                                </p>
                                <Button primary> RISOLVI IL TEST </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
}

export default ModalComponent;
