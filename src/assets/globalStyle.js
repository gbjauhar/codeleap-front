import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: auto;
    width: 50%;
    background-color: #DDDDDD;
    font-family: 'Roboto';
    button{
     cursor: pointer;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
  }
  `