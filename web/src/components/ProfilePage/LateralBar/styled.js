import styled from "styled-components";

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: flex-end;
`;
export const ThemeSwitcher = styled.button`
  margin: 0px 30px;
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
export const ProfileInfoContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const ProfilePicture = styled.img`
  background-color: white;
  width: 300px;
  height: 300px;
  border-radius: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 250px;
    height: 250px;
  }
`;
export const ProfileInfoName = styled.h1`
  font-size: 40px;
  font-style: italic;
  font-weight: 300;
  line-height: 50px;
  margin-top: 15px;
  width: 400px;
  text-align: left;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 300px;
  }
`;
export const ProfileInfoUsername = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.colors.text};
  line-height: 34px;
  font-style: italic;
  font-weight: 300;
  width: 400px;
  text-align: left;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 300px;
  }
`;

export const ProfileInfoDescription = styled.div`
  width: 400px;
  margin-top: 30px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 300px;
  }
`;
export const ProfileInfoDescriptionText = styled.span`
  color: ${(props) => props.theme.colors.subtext};
  font-family: Lato;
  font-size: 18px;
  line-height: 28px;
  text-align: justify;
`;

export const ProfileInfoStatsContainer = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 300px;
  }
`;
export const ProfileInfoStatsItem = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

export const ProfileInfoStatsText = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-style: italic;
  line-height: 26px;
  font-weight: 300;
  text-align: left;
  margin-top: 3px;
  margin-left: 5px;
  margin-right: 5px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;
export const ProfileInfoStatsNumber = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-style: italic;
  line-height: 26px;
  font-weight: 300;
  text-align: left;
  margin-top: 3px;
  margin-left: 5px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-right: 10px;
  }
`;
export const ProfileInfoContatsContainer = styled.article`
  width: 400px;
  margin-top: 30px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 300px;
  }
`;
export const ProfileInfoContact = styled.div`
  width: 400px;
  height: 35px;
  margin-bottom: 5px;
  display: flex;
  margin-top: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 300px;
  }
`;
export const ProfileInfoContatText = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  line-height: 34px;
  width: 300px;
  text-align: left;
  margin-left: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 16px;
  }
`;
export const ProfileLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 190px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.text};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: none;
  margin-bottom: 25px;
`;
export const ProfileBackButtonText = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  line-height: 62px;
  text-align: center;
`;
