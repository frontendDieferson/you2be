import React from 'react';

import { Container, Image, Title, Input, Span, Button, Box, BoxText, Boxdownload, Boxspan } from './style';


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
       <Boxdownload>
         <Image 
          src="https://cdn1.vintepila.com.br/arquivos/2020/03/17010504/YouTube-thumbnail-size-guide-best-practices-top-examples.png"        
         />
        <Boxspan><span>Descrição da Música</span></Boxspan>
        <Button type='submit' >Download</Button>
       </Boxdownload>
       
         
    </Container>
    
)

export default Containercenter;