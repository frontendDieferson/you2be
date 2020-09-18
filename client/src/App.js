import React, { Component } from 'react';
import GlobalStyle from './styles/global';

import { Container, Content } from './styles';
import Logo from './components/Logo';
import Containercenter from './components/Containercenter';
import Containertext from './components/Containertext';
import Footer from './components/Footer';

class App extends Component{
  state = {
    response: ''
  };

  componentDidMount = () => {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/download');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render(){
    return (
    <Container>
        <GlobalStyle />
        <Content>
          <Logo /> 
          {this.state.response}
          <Containercenter />
          <Containertext />
          <Footer />
        </Content>
    </Container>
    )
  }
}


export default App;