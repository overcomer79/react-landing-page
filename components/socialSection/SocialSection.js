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
                userId='484934710'
                //userId='8987997106'
                //userId='1836693944' My id
                //clientId='d54dc2f21266449b96d7907f850e19e9'
                accessToken='484934710.3433732.c52c74a8827a4d8a9357d1912b04c8f2'
                //accessToken='8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9'
               // accessToken='1836693944.d54dc2f.fbd336ed13de45bfb15b7624e9f11879' My Token
            />
        </div>

    );
}