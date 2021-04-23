import styled from "styled-components";

export const RepositoriesContainer = styled.section`
  overflow-y: scroll;
  background-color: ${(props) => props.theme.colors.background};
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;
