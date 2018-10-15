import React from 'react';

import {
    Header,
    Image
} from 'semantic-ui-react';

export default () => {
    return (
        <div>
            <Header sub style={{ textDecorationLine: 'underline' }} > IN COLLABORAZIONE CON </Header>
            <Image.Group size='small'>
                <Image src='static/images/sample_img.png'></Image>
                <Image src='static/images/sample_img.png'></Image>
                <Image src='static/images/sample_img.png'></Image>
                <Image src='static/images/sample_img.png'></Image>
            </Image.Group>
        </div>
    );
}