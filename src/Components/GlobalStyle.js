import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}

body{
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden ;
}


html{ 
    font-size: 62.5%;
}

li{
    list-style: none;
}

button, a{
    &:hover{
    cursor: pointer;
    }
}

a{
    text-decoration: none;
}

// Scroll Bar
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}

/* To hide arrow icon from input */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

`;