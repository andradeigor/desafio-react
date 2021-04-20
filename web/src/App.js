import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import light from "./style/themes/light";
import HomePage from "./components/HomePage/index";
function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
