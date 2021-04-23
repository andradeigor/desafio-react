import { GridContainer } from "./styled";
import LateralBar from "./LateralBar/index";
import Repositories from "./Repositories/index";
const ProfilePage = () => {
  return (
    <GridContainer>
      <LateralBar />
      <Repositories />
    </GridContainer>
  );
};

export default ProfilePage;
