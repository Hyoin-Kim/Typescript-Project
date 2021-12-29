import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  body, button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  p{
    color: #4D5358;
  }

  input{
    border: none;
    padding: 5px;
    border-bottom : 1px solid #F2F2F2;
  }

  input:focus{
    outline:none;
    border-bottom : 1px solid #848484;
  }
`;

export default GlobalStyle;
