import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';
import { css } from 'react-emotion';
import { BounceLoader } from 'react-spinners';

const override = css`
    margin: 20vh 40vw;
`;

class Condom extends Component {

    hint = `Il preservativo elimina il rischio di contrarre l’infezione da HIV se indossato fin 
            dall'inizio del rapporto, per tutta la sua durata e se non si rompe.`;
            
    text = 'AMARCO$D$$'
    solution = ['N','O','M'];
    placeholder = '$';

    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500);
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return (
                <BounceLoader
                    className={override}
                    sizeUnit={"vw"}
                    size={20}
                    color={'#df2c3f'}
                    loading={loading}
                />
            );
        }
        return (
            <Layout down={true}>
                <div className='tests-container'>
                    <Quiz
                        hint={this.hint}
                        text={this.text}
                        placeholder={this.placeholder}
                        solution={this.solution}
                    />
                </div>
            </Layout>
        );
    }
}

export default Condom;