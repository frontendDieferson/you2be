import React from 'react';

import { Container, Span, Image, P } from './style';


const Logo = () => (
    <Container>
        <Span>@2020 you2be.app</Span>
        <P>Aplicação desenvolvida por <a href="https://github.com/startuphappyCode" rel="noopener"><Image src='./assets/happyCode.png' /></a></P>
    </Container>
)

export default Logo;