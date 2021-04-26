import {
  MainContainer,
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
import ModalError from "../ModalError/index";
import SearchIconLightPath from "../../assets/SearchIconLight.svg";
import SearchIconDarkPath from "../../assets/SearchIconDark.svg";
import { useHistory } from "react-router-dom";
import MoonIconPath from "../../assets/MoonIcon.svg";
import SunIconPath from "../../assets/SunIcon.svg";
import { useState } from "react";
import request from "../../utils/request";

const HomePage = ({ TougleTheme, preferenceTheme }) => {
  const history = useHistory();
  const [searchBox, setSearchBox] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [Error, setError] = useState(false);
  const handleInputChange = (event) => {
    setSearchBox(event.target.value);
  };
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = async () => {
    if (searchBox.length < 3) {
      return setError(true);
    }
    await request(`https://api.github.com/users/${searchBox}`, "get")
      .then((res) =>
        history.push({
          pathname: `/profile/${res.data.login}`,
          state: { data: res.data },
        })
      )
      .catch((err) => {
        if (err.response) {
          setError(true);
          handleModal();
          return;
        }
      });
  };

  return (
    <MainContainer>
      <GeneralHome>
        <ThemeSwitcherContainer>
          <ThemeSwitcher onClick={TougleTheme}>
            <ThemeIcon
              src={
                preferenceTheme.title === "light" ? MoonIconPath : SunIconPath
              }
            />
          </ThemeSwitcher>
        </ThemeSwitcherContainer>
        <HomeArea>
          <HomeContainer>
            <TitleContainer>
              <Title>Search Devs</Title>
            </TitleContainer>
            <SearchContainer>
              <Seach
                placeholder="Type the username here..."
                value={searchBox}
                Error={Error}
                onChange={handleInputChange}
              />
              <Button onClick={handleClick}>
                <ButtonContent>
                  <SearchIcon
                    src={
                      preferenceTheme.title === "light"
                        ? SearchIconLightPath
                        : SearchIconDarkPath
                    }
                    dragabble={false}
                  />
                  <ButtonText type="submit">Buscar</ButtonText>
                </ButtonContent>
              </Button>
            </SearchContainer>
          </HomeContainer>
        </HomeArea>
      </GeneralHome>
      <ModalError isOpen={isOpen} handleModal={() => handleModal()} />
    </MainContainer>
  );
};

export default HomePage;
