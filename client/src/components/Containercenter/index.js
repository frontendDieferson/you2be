import React from 'react';


import { Container, Title, Input, Span, Button, Box, BoxText } from './style';


const Containercenter = () => (
    <Container>
       <Title>Download Audio and Playlist from YouTube </Title>
      <Box>
        <form action="/download" method="post">
      <Input name='url' placeholder="Paste Link Here." type="text"/> 
      <Button type='submit' >Start</Button>
        </form>
      
       </Box>
       <BoxText><p>By using our service you are accepting our <Span>terms of use.</Span></p></BoxText>
      
    </Container>
    
)

export default Containercenter;