import { GridContainer } from "./styled";
import LateralBar from "./LateralBar/index";
import Repositories from "./Repositories/index";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProfilePage = ({ preferenceTheme, TougleTheme }) => {
  const id = useParams();
  const [stars, SetStars] = useState(0);
  return (
    <GridContainer>
      <LateralBar
        id={id.id}
        preferenceTheme={preferenceTheme}
        TougleTheme={TougleTheme}
        stars={stars}
      />
      <Repositories id={id.id} SetStars={(stars) => SetStars(stars)} />
    </GridContainer>
  );
};

export default ProfilePage;
