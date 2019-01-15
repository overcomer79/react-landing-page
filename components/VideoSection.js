import React from 'react';
import {
    Embed
} from 'semantic-ui-react';

var aStyle = {
    display: 'block',
    position: 'relative',
    visibility: 'hidden',
}

export default () => {
    return (
        <div>
            <a style={aStyle} id="video-section" />
            <Embed
                id='ZcIHfcSB6-o?autoplay=1&amp;mute=1'
                brandedUI
                source='youtube'
                aspectRatio='16:9'
                placeholder='static/images/img_pre_video.jpg'
                active
            />

        </div>

    );
}