import Header from "./components/common/Header";
import Main from "./pages/Main";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <StyledRoot>
      <GlobalStyle />
      <Header />
      <Main />
    </StyledRoot>
  );
}

export default App;

const StyledRoot = styled.div`
  min-width: 23.438rem;
  max-width: 40rem;
  height: 40rem;
  position: relative;
  margin: auto;
`;
