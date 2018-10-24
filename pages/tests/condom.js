import React, { Component } from 'react';
import Layout from '../../components/Layout';

class Condom extends Component {
    render(){
        return (
            <Layout down={true}>
                <h1 style={{paddingTop: 100}}> Condom Component</h1>
            </Layout>
        );
    }
}

export default Condom;