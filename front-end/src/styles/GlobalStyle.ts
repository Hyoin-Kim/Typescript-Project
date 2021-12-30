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
`;

export default GlobalStyle;
