import React from 'react';
import GlobalStyle from './styles/global';

import { Container, Content } from './styles';
import Logo from './components/Logo';
import Containercenter from './components/Containercenter';
import Containertext from './components/Containertext';
import Footer from './components/Footer';






function App() {
    return <Container>
        <GlobalStyle />
        <Content>
          <Logo /> 
          <Containercenter />
          <Containertext />
          <Footer />
        </Content>
    </Container>
}


export default App;