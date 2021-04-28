import styled from "styled-components";

export const GridContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 450px 1fr;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: 350px 1fr;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    width: 320px;
    flex-direction: column;
    height: 100%;
  }
`;
