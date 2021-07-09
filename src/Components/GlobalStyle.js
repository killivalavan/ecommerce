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
    background: #F5F5F5	;
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


`;