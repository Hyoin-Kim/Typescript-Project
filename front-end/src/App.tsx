import Header from "./components/common/Header";
import Main from "./pages/Main";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <StyledRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main />
      </ThemeProvider>
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
