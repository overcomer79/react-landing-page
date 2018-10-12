import React, { Component } from 'react';

import Layout from './../components/Layout';

class Landing extends Component {

    async componentDidMount() {
        console.log("ECCHIME");
    }

    render() {
        return (
            <Layout>
                <div>Welcome to next.js!</div>
            </Layout>
        );
    }
}

export default Landing;

// export default () => <div>Welcome to next.js!</div>