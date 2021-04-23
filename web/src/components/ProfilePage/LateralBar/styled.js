import styled from "styled-components";

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
  margin-top: 60px;
  border-radius: 15px;
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
`;
export const ProfileInfoUsername = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.colors.text};
  line-height: 34px;
  font-style: italic;
  font-weight: 300;
  width: 400px;
  text-align: left;
`;

export const ProfileInfoDescription = styled.div`
  width: 400px;
  margin-top: 30px;
`;
export const ProfileInfoDescriptionText = styled.span`
  color: ${(props) => props.theme.colors.subtext};
  font-family: Lato;
  font-size: 18px;
  line-height: 28px;
  text-align: left;
`;

export const ProfileInfoStatsContainer = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
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
  width: 110px;
  font-weight: 300;
  text-align: left;
  margin-top: 3px;
  margin-left: 5px;
`;
export const ProfileInfoContatsContainer = styled.article`
  width: 400px;

  margin-top: 30px;
`;
export const ProfileInfoContact = styled.div`
  width: 400px;
  height: 35px;
  margin-bottom: 5px;
  display: flex;
  margin-top: 15px;
`;
export const ProfileInfoContatText = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 22px;
  font-style: italic;
  font-weight: 300;
  line-height: 34px;
  width: 300px;
  text-align: left;
  margin-left: 15px;
`;

export const ProfileBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 190px;
  height: 50px;
  color: ${(props) => props.theme.colors.text};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: none;
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
