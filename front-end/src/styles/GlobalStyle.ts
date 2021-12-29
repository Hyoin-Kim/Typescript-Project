import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  body, button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  p{
    color: #4D5358;
    font-size: 14px;
    line-height: 19.6px;
    font-weight: 400;
  }

  input{
    border: none;
    padding: 5px;
    border-bottom : 1px solid #E6E6E6;
  }

  input:focus{
    outline:none;
    border-bottom : 1px solid #848484;
  }
`;

export default GlobalStyle;
