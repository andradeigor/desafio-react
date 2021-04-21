import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import light from "./style/themes/light";
import dark from "./style/themes/dark";
import HomePage from "./components/HomePage/index";
import ProfilePage from "./components/ProfilePage/index";
import MySetState from "./utils/MyUseState";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <Router>
        <Route path="/" exact>
          <HomePage
            TougleTheme={() => TougleTheme()}
            preferenceTheme={preferenceTheme}
          />
        </Route>
        <Route path="profile/" children={ProfilePage}></Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
