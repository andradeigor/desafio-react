import styled from "styled-components";

export const CardArea = styled.div`
  margin-bottom: 5px;
`;
export const CardContainer = styled.div`
  height: 100%;
  padding-left: 70px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-left: 25px;
  }
`;
export const CardTitleContainer = styled.div``;

export const CardTitle = styled.h1`
  font-size: 24px;
  line-height: 34px;
  font-weight: 300;
  text-align: left;
`;
export const CardTitleLink = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const CardDescriptionContainer = styled.div``;

export const CardDescription = styled.h2`
  font-size: 18px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 300;
  text-align: left;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 25ch;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const CardStatsArea = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`;

export const CardStatsItem = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 18px;
  font-style: italic;
  line-height: 26px;
  font-weight: 300;
  text-align: left;
  margin-right: 10px;
  margin-top: 3px;
`;
export const CardStatsDot = styled.span`
  color: ${(props) => props.theme.colors.subtext};
  font-size: 20px;
  line-height: 33px;
  text-align: left;
  margin-right: 10px;
`;
export const RepositoriesDivider = styled.div`
  height: 2px;
  border: 1px solid ${(props) => props.theme.colors.divider};
  width: 98%;
`;
