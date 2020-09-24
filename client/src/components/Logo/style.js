import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 414px ) {
    flex-direction: column;
    width: 100%;
    
  }

`;

export const Image = styled.img`
    width: 200px;
    height: 77px;
    display: flex;
    justify-content: center;
    float: left;
    margin-top: 20px;

    
    @media (max-width: 414px) {
    flex-direction: column;
    
    
  }
    
`;


