import { GridContainer } from "./styled";
import LateralBar from "./LateralBar/index";
import Repositories from "./Repositories/index";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const id = useParams();
  return (
    <GridContainer>
      <LateralBar id={id.id} />
      <Repositories id={id.id} />
    </GridContainer>
  );
};

export default ProfilePage;
