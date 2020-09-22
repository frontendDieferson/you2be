import React from 'react';

import { Container, Image, Title, Input, Span, Button, Box, BoxText, Boxdownload, Boxspan } from './style';



export default function Containercenter({handleFileInfo, handleChange, handleDownload, response}){
  
  if(response.title !== undefined){
    return (
    
      <Container>
        <Title>Download Audio and Playlist from YouTube </Title>
        <Box>
          <form onSubmit={handleFileInfo}>
        <Input name='url' placeholder="Paste Link Here." type="text" onChange={handleChange}/> 
        <Button type='submit'>Start</Button>
        </form>

        </Box>
        <BoxText>By using our service you are accepting our <Span>terms of use.</Span></BoxText>
       

          <Boxspan>{response.title}</Boxspan>
          <Boxdownload>
          
          <Image 
            src={response.thumbnail.url}        
          />
          <Button type='submit' onClick={handleDownload} >Download</Button>
        </Boxdownload>
          
      </Container>
)}

  return (   
      <Container>
      <Title>Download Audio and Playlist from YouTube </Title>
      <Box>
        <form onSubmit={handleFileInfo}>
      <Input name='url' placeholder="Paste Link Here." type="text" onChange={handleChange}/> 
      <Button type='submit'>Start</Button>
      </form>

      </Box>
      <BoxText>By using our service you are accepting our <Span>terms of use.</Span></BoxText>

        
      </Container>
  )
}