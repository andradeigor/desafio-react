import {
  HomeArea,
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
const HomePage = () => {
  return (
    <HomeArea>
      <HomeContainer>
        <TitleContainer>
          <Title>Search Devs</Title>
        </TitleContainer>
        <SearchContainer>
          <Seach placeholder="Type the username here..." />
          <Button>
            <ButtonContent>
              <SearchIcon src={SearchIconLightPath} />
              <ButtonText>Buscar</ButtonText>
            </ButtonContent>
          </Button>
        </SearchContainer>
      </HomeContainer>
    </HomeArea>
  );
};

export default HomePage;
