import Header from "./components/common/Header";
import Main from "./pages/Main";
import styled from "styled-components";
import GlobalStyle from "./components/common/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./components/common/theme";
import Footer from "./components/common/Footer";

function App() {
  return (
    <StyledRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </StyledRoot>
  );
}

export default App;

const StyledRoot = styled.div`
  width: 23.438rem;
  height: 40rem;
`;
