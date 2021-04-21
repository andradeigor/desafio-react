import styled from "styled-components";

export const ErrorModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(59, 66, 82, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;
export const ErrorModal = styled.div`
  width: 450px;
  height: 300px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`;
export const ErrorModalImage = styled.img`
  width: 65px;
  height: 65px;
`;
export const ErrorModalTitle = styled.h1`
  margin-top: 25px;
  font-size: 28px;
  font-weight: 300;
  font-style: italic;
  color: ${(props) => props.theme.colors.secondary};
`;
export const ErrorMotalSubtitle = styled.h2`
  color: ${(props) => props.theme.colors.subtext};
  font-weight: 300;
  font-size: 16px;
  font-style: italic;
  margin-top: 5px;
  text-align: center;
`;
export const ErrorModalButton = styled.button`
  width: 180px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: none;
  margin-top: 25px;
  :active {
    position: relative;
    top: -0.5px;
  }
`;
export const ErrorModalButtonText = styled.span`
  font-size: 18px;
  font-style: italic;
  color: ${(props) => props.theme.colors.text};
`;
