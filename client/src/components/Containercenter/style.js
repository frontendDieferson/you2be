
import styled from 'styled-components'

export const Container = styled.div`

  align-items: center;
  justify-content: center;
  

`;

export const Title = styled.h1`
text-align:center;
padding: 50px;
align-items: center;
justify-content: center;
color: #565656;



`;

export const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;



`;
export const Input = styled.input`

top: 300px;

justify-content: center;
align-items: center;
max-width: 768px;
height: 66px;


border: 2px solid #F80059;

border-radius: 8px;
text-align:center;

`;


export const Button = styled.button `

right: 200px;
top: 300px;
min-width: 100px;
max-width: 155px;
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


`;

export const Span = styled.span`

  color: #F80059;
  margin: 5px;

`;