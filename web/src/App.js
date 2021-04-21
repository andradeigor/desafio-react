import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import light from "./style/themes/light";
import dark from "./style/themes/dark";
import HomePage from "./components/HomePage/index";
import MySetState from "./utils/MyUseState";
function App() {
  const [preferenceTheme, SetPreferenceTheme] = MySetState("theme", light);
  const TougleTheme = () => {
    console.log("mudei");
    preferenceTheme === light
      ? SetPreferenceTheme(dark)
      : SetPreferenceTheme(light);
  };
  return (
    <ThemeProvider theme={preferenceTheme}>
      <GlobalStyle />
      <HomePage
        TougleTheme={() => TougleTheme()}
        preferenceTheme={preferenceTheme}
      />
    </ThemeProvider>
  );
}

export default App;
