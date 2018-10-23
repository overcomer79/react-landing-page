import React from 'react';
import {
    Embed,
    Image
} from 'semantic-ui-react';

/**
 * Nel frattempo che si caricherà un video verrà utilizzata questa immagine sostitutiva
 */
export default () => {
    return (
        <div>
            <a className="anchor" id="video-section" />

            <Image src='static/images/img_pre_video.jpg' fluid />

            {/* <Embed 
            id='O6Xo21L0ybE'
            brandedUI
            placeholder='static/images/img_video.jpg' 
            source='youtube' 
            /> */}

        </div>

    );
}