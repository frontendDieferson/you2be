import React, { Component } from 'react';
import GlobalStyle from './styles/global';

import { Container, Content } from './styles';
import Logo from './components/Logo';
import Containercenter from './components/Containercenter';
import Containertext from './components/Containertext';
import Footer from './components/Footer';
import api from './services/api';
import fileDownload from 'js-file-download';


class App extends Component{
  state = {
    response: {},
    error: null,
    urlDigitada: ''
  };


  handleFileInfo = (e) => {
    e.preventDefault();
    
    let data = ''
    api.post('/fileinfo',{
      url:  this.state.urlDigitada
    }).then((response) => {
       data = {
        id: response.data.videoId,
        title: response.data.title,
        thumbnail:response.data.thumbnail.thumbnails[0],
        url: response.data.video_url,
      }
      this.setState({
        response: data,
      })
      
    }).catch( (e) => {
      this.setState({
        error: true
      })
      console.log(e);
    })
    
  };

  handleChange = (e) =>{
    const url = e.target.value

    this.setState({
      urlDigitada: url
    })
  }

  handleDownload = (e) => {
    const dados = this.state.response;
    api.get(`/download/${dados.id}`,{
      responseType: 'blob',
    }).then((response) => {
     fileDownload(response.data, `${dados.title}.mp3`)
    }).catch( (e) => {

    })
  }



  render(){
    const {response} = this.state;
    return (
    <Container>
        <GlobalStyle />
        <Content>
          <Logo/>
          <Containercenter 
          handleFileInfo={this.handleFileInfo}
          handleChange={this.handleChange}
          response={response}
          handleDownload={this.handleDownload}
          />
          <Containertext />
          <Footer />

        </Content>
    </Container>
    )
  }
}


export default App;