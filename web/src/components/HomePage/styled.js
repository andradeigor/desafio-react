import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
`;

export const GeneralHome = styled.section`
  width: 100vw;
  height: 80vh;
`;
export const ThemeSwitcherContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 80px;
  justify-content: flex-end;
`;
export const ThemeSwitcher = styled.button`
  margin: 0px 40px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  :active {
    position: relative;
    top: -0.5px;
  }
`;
export const ThemeIcon = styled.img`
  width: 40px;
  height: 40px;
`;
export const HomeArea = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  width: 520px;
  height: 100px;
  position: relative;
`;
export const TitleContainer = styled.div`
  width: 520px;
  height: 50%;
`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  font-style: italic;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
`;

export const SearchContainer = styled.div`
  width: 600px;
  height: 50%;
  display: flex;
`;

export const Seach = styled.input`
  background-color: ${(props) => props.theme.colors.inputbackground};
  width: 400px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid
    ${(props) => (props.Error ? "#F44336" : props.theme.colors.secondary)};
  padding-left: 10px;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  :focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.subtext};
  }
`;
export const Button = styled.button`
  width: 120px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: none;
  :active {
    position: relative;
    top: -0.5px;
  }
`;
export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  pointer-events: none;
`;
export const ButtonText = styled.span`
  font-family: "Lato", sans-serif;
  font-size: 22px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-style: italic;
`;
