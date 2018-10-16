import React from 'react';
import Instafeed from 'react-instafeed';

import './social-section.css';

export default () => {
    const instafeedTarget = 'instafeed';
    return (

        <div id={instafeedTarget}>
            <Instafeed
                limit='7'
                get='tagged'
                tagName='awesome'
                resolution='standard_resolution'
                sortBy='most-recent'
                target={instafeedTarget}
                template='<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>'
                userId='8987997106'
                clientId='924f677fa3854436947ab4372ffa688d'
                accessToken='8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9'
            />
        </div>

    );
}