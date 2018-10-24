import React from 'react';
import Head from 'next/head';

import Header from './header/Header';
import Footer from './footer/Footer';

export default (props) => {
    return (
        
        <div>
            <Head>
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
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/static/style.css"
                />
            </Head>
            
            <Header down={props.down}/>
            {props.children}         
            <Footer />
        </div>
    );
};