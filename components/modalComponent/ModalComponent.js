import React, { Component } from 'react';

import {
    Modal,
    Button,
    Grid,
    Image
} from 'semantic-ui-react';

import './modal-component.css';

const delay = ms => new Promise(res => setTimeout(res, ms));

class ModalComponent extends Component {
    state = {
        open: false
    }

    async componentDidMount() {
        await delay(5000);
        this.setState({ open: true });
    }

    onClose = () => {
        this.setState({ open: false })
    }

    renderModal() {
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
                <Modal.Content style={{ padding: '1.5rem' }}>
                    <Grid>
                        <Grid.Row columns='two'>
                            <Grid.Column width={4}>
                                <Image src='static/images/icona_pop_up.png' size='small' style={{ marginTop: '5px' }} />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <div className='modal-header'>
                                    Complimenti! < br />
                                    Hai appena contratto il virus dell'informazione!
                                    </div>
                                <p className='modal-content'>
                                    Diffondilo e anima l’installazione collocata sulla scalinata
                                    del rettorato della Sapienza seguendo le indicazioni.
                                    </p>
                                <a href='/tests' onClick={this.props.onClickForTest}>
                                    <Button primary> INIZIA IL GIOCO </Button>
                                </a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }

    render() {
        return (
            <div>{this.props.toShow ? this.renderModal() : null}</div>
        );
    }
}

export default ModalComponent;
