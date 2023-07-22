import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#2b2b2b",
  textColor: "#fff",
  header: "#000",
};

export const lightTheme = {
  body: "#E0E0E0",
  textColor: "#000",
  header: "#939393",
};

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    min-height: 100%;
  }

  *, button, input {
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
 
  :root {
    --color-black: #000;
    --color-black-light: #333;
    --color-white: #FFF;
    --color-gray: #E0E0E0;
    --color-gray-light: #F4F1EA;
    --color-red: #C33130;
    --color-blue: #4a16ab;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }

 body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textColor};
  transition: .3s ease;
 }

 body {
    scrollbar-width: thin;
    scrollbar-color: black transparent;
  }
  
  body::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  
  body::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #000;
  }

 h1,h2, h3, h4, h5 {
   color: ${(props) => props.theme.textColor};
 }

 a , p{
    text-decoration: none;
   color: ${(props) => props.theme.textColor};

  }

 header{
   background: ${(props) => props.theme.header};
   position: fixed;
   z-index: 99;
 }

.menu-section.on{
  background: ${(props) => props.theme.header};
 }

`;