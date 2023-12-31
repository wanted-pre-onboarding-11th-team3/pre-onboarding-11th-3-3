import { createGlobalStyle } from 'styled-components';
import COLOR from './constants/color';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${COLOR.DarkText};

    &::-webkit-scrollbar {
      width:5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color:${COLOR.DarkBorder};
      border-radius: 10px;
    }
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: ${COLOR.DarkBodyBg};
  }
  
  ul,li {
    list-style: none;
  }

  button, input {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font: inherit;
  }

  input:not([type="checkbox"]) {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  img {
    width:100%;
  }
`;

export default GlobalStyle;
