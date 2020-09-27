import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  @media (max-width: 414px) {
    flex-direction: row;

  }

`;

export const Span = styled.span`


   align-items: center;
   justify-content: center;
   width: 100%;
   padding: 10px;
   margin-top: fixed;
   display: flex;

   font-family: Roboto;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;

/* identical to box height */

   text-align: center;  

    color: #000000;

    @media (max-width: 414px) {
    flex-direction: row;
      font-size: 0.9rem;

    }

`;

export const P = styled.p`
   align-items: center;
   justify-content: center;
   width: 100%;
    
   
   display: flex;

   font-family: Roboto;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;

   @media (max-width: 414px) {
    flex-direction: row;
   }
`;

export const Image = styled.img`

    margin: 8px;

    @media (max-width: 414px) {
    flex-direction: row;
    }

`;