import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
        
      
    }
    
 :root {
        width: 100%;
        height: 100%;
        position: relative;

        font-family: Roboto, sans-serif;
        font-size: 14px;
        
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;

 }

`;