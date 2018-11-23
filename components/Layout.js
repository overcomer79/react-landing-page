import React from 'react';
import Head from 'next/head';

/**
 * From https://github.com/zeit/next.js/tree/canary/examples/with-google-analytics
 * 
 */
import Router from '../routes';
Router.onRouteChangeComplete = url => gtag.pageview(url);

import * as gtag from '../lib/gtag'

import Header from './header/Header';
import Footer from './footer/Footer';

export default (props) => {
    return (
        <div>
            <Head>
                <meta
                    name="google-site-verification"
                    content="PEpOsTsiIr3OftaItHzWgHqo9MZ-nfmhpID8PflJ3R0"
                />
                <meta 
                    name="google-site-verification" 
                    content="Lk5xTf3fFOfTLCg7mKuGIKjI05Lf710XpWp-pFhC9e0" 
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                />
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @font-face {
                            font-family: 'Ubuntu Mono';
                            font-weight: 300;
                            src: url('/static/fonts/UbuntuMono-Regular.ttf') format('truetype');
                        }

                        @font-face {
                            font-family: 'Ubuntu Mono';
                            font-weight: bold;
                            src: url('/static/fonts/UbuntuMono-Bold.ttf') format('truetype');
                        }                  
                        `}}
                />
                <link rel="shortcut icon" type="image/png/ico" href="/static/favicon.ico" />

                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/static/style.css"
                />
                {/* Global site tag (gtag.js) - Google Analytics  */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                />
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', '${gtag.GA_TRACKING_ID}');`
                }}
                />

            </Head>

            <Header
                down={props.down}
                onClickForTest={props.onClickForTest}
            />
            {props.children}
            <Footer />
        </div>
    );
};