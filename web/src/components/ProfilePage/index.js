import { GridContainer } from "./styled";
import LateralBar from "./LateralBar/index";
import Repositories from "./Repositories/index";
import { useParams } from "react-router-dom";

const ProfilePage = ({ preferenceTheme, TougleTheme }) => {
  const id = useParams();
  return (
    <GridContainer>
      <LateralBar
        id={id.id}
        preferenceTheme={preferenceTheme}
        TougleTheme={TougleTheme}
      />
      <Repositories id={id.id} />
    </GridContainer>
  );
};

export default ProfilePage;
