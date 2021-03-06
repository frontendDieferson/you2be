import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 414px) {
    flex-direction: column;
    width:100%;

   
  }
  
 

`;

export const Title = styled.h1`
text-align:center;
padding: 50px;
align-items: center;
justify-content: center;
color: #565656;

@media (max-width: 414px) {
    flex-direction: row;
    width:auto;
    
    
    
  }

`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  



  @media (max-width: 414px) {
    flex-direction: row;
    width:350px;
    align-items: center;

  }

`;
export const Input = styled.input`
 
  align-items: center;
  justify-content: center;
  top: 300px;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 66px;
  border: 2px solid #F80059;
  border-radius: 8px;
  text-align:center;

  @media (max-width: 414px) {
    flex-direction: row;
    width:350px;
    margin: auto;
    
    
    
  }

`;


export const Button = styled.button `
  
  right: 200px;
  top: 300px;
  width: 155px;
  height: 66px;
  margin: 10px;
  background: #F80059;
  border: 2px solid #F80059;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  cursor: pointer;

  

  &:hover{
      background: #C31957;
      border: 2px solid #C31957;
      transition: 300ms;
  }
  @media (max-width: 414px) {
    width:330px;
  
    flex-direction: row;  
      
    
  }
  
`;





export const BoxText = styled.p`
text-align: center;
align-items:center;
justify-content:center;
font-family: Roboto;
font-style: normal;
font-weight: 100;
font-size: 18px;
line-height: 21px;
/* identical to box height */
margin-top:10px;

color: #000000;

@media (max-width: 414px) {
    flex-direction: row;
  
    font-size:0.9rem;
  }

`;

export const Span = styled.span`

  color: #F80059;
  margin: 5px;

  

`;



export const Image = styled.img`
  display:flex;
  width: 250px;
  height: 150px;

  border-radius: 8px;
  float: left;
  cursor: pointer;
  opacity: 0.6;
  &:hover {
  opacity: 1.0;
  transition: 300ms;
  
  }
  
`;

export const Boxdownload = styled.div`

  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  justify-items: center;
  margin-top: 30px;
  
  @media (max-width: 414px) {
    flex-direction: column;
  
    
  }
  
`;

export const Boxspan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  left: 470px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  opacity: 0.9;
  cursor: pointer;

`