import React from 'react';
import { Container, Image, Row, BoxTitle, Span, } from './style';



const Containertext = () => (
    <Container>
        <Row>
            <Image src='./assets/free.svg' />

            <BoxTitle>Free Download</BoxTitle>
            
            <Span>Unlimited conversion 
                  and free download.</Span>

        </Row>

        <Row>
            <Image src='./assets/audio.svg' />

            <BoxTitle>Audio and Playlist</BoxTitle>
            
            <Span>Directly Download 
                  Music & Playlist.</Span>

        </Row>

        <Row>
            <Image src='./assets/download.svg' />

            <BoxTitle>Easy Download</BoxTitle>
            
            <Span>Fully compatible 
                  with all browsers.</Span>

        </Row>


    </Container>

    
)


export default Containertext;