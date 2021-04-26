import { GridContainer } from "./styled";
import LateralBar from "./LateralBar/index";
import Repositories from "./Repositories/index";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const history = useHistory();
  const location = useLocation();
  const [profileData, setProfileData] = useState(location.state.data);

  return (
    <GridContainer>
      <LateralBar profileData={profileData} />
      <Repositories profileData={profileData} />
    </GridContainer>
  );
};

export default ProfilePage;
