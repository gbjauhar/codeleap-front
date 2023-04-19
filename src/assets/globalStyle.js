import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    h1{
      font-family: Cedarville cursive;
    }
    font-family: Montserrat, sans-serif;
    transition: all 0.50s linear;
    button{
     font-family: Montserrat, sans-serif;
     cursor: pointer;
     font-size: 14px;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
  }
  `