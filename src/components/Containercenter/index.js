import React from 'react';


import { Container, Title, Input, Span, Button, Box, BoxText } from './style';


const Containercenter = () => (
    <Container>
       <Title>Download Audio and Playlist from YouTube </Title>
      <Box>
      <Input defaultValue="Paste Link Here." type="text"
       /> 

       <Button>Start</Button>
       </Box>
       <BoxText><p>By using our service you are accepting our <Span>terms of use.</Span></p></BoxText>
      
    </Container>
    
)

export default Containercenter;