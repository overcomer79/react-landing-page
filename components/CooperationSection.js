import React from 'react';

import {
    Header,
    Image,
    Container
} from 'semantic-ui-react';

export default () => {
    return (
        <Container>
            <Header sub style={{ textDecorationLine: 'underline' }} > IN COLLABORAZIONE CON </Header>
            <Image.Group size='small'>
                <Image src='static/images/sample_img.png'></Image>
                <Image src='static/images/sample_img.png'></Image>
                <Image src='static/images/sample_img.png'></Image>
                <Image src='static/images/sample_img.png'></Image>
            </Image.Group>
        </Container>
    );
}