import {
  GeneralHome,
  HomeArea,
  ThemeSwitcherContainer,
  ThemeSwitcher,
  ThemeIcon,
  HomeContainer,
  TitleContainer,
  Title,
  SearchContainer,
  Seach,
  Button,
  ButtonContent,
  SearchIcon,
  ButtonText,
} from "./styled";
import SearchIconLightPath from "../../assets/SearchIconLight.svg";
import SearchIconDarkPath from "../../assets/SearchIconDark.svg";
import MoonIconPath from "../../assets/MoonIcon.svg";
import SunIconPath from "../../assets/SunIcon.svg";

const HomePage = ({ TougleTheme, preferenceTheme }) => {
  return (
    <GeneralHome>
      <ThemeSwitcherContainer>
        <ThemeSwitcher onClick={TougleTheme}>
          <ThemeIcon
            src={preferenceTheme.title === "light" ? MoonIconPath : SunIconPath}
          />
        </ThemeSwitcher>
      </ThemeSwitcherContainer>
      <HomeArea>
        <HomeContainer>
          <TitleContainer>
            <Title>Search Devs</Title>
          </TitleContainer>
          <SearchContainer>
            <Seach placeholder="Type the username here..." />
            <Button>
              <ButtonContent>
                <SearchIcon
                  src={
                    preferenceTheme.title === "light"
                      ? SearchIconLightPath
                      : SearchIconDarkPath
                  }
                />
                <ButtonText>Buscar</ButtonText>
              </ButtonContent>
            </Button>
          </SearchContainer>
        </HomeContainer>
      </HomeArea>
    </GeneralHome>
  );
};

export default HomePage;
