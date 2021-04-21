import {
  ErrorModalContainer,
  ErrorModal,
  ErrorModalImage,
  ErrorModalTitle,
  ErrorMotalSubtitle,
  ErrorModalButton,
  ErrorModalButtonText,
} from "./styled";
import ErrorIconPath from "../../assets/ErrorIcon.svg";
const ErrorModalComponent = ({ isOpen, handleModal }) => {
  return (
    <ErrorModalContainer isOpen={isOpen} onClick={handleModal}>
      <ErrorModal>
        <ErrorModalImage src={ErrorIconPath} />
        <ErrorModalTitle>Something went Wrong!</ErrorModalTitle>
        <ErrorMotalSubtitle>
          The user you are looking for does not exist
          <br /> or you have been misspelled
        </ErrorMotalSubtitle>
        <ErrorModalButton onClick={handleModal}>
          <ErrorModalButtonText>Voltar</ErrorModalButtonText>
        </ErrorModalButton>
      </ErrorModal>
    </ErrorModalContainer>
  );
};
export default ErrorModalComponent;
