import { RepositoriesContainer } from "./styled";
import { useHistory } from "react-router-dom";
import RepositoriesCard from "./RepositoriesCard/index";
import request from "../../../utils/request";
import { useEffect, useState } from "react";
import SortRepos from "../../../utils/SortRepos";

const Repositories = ({ id, SetStars }) => {
  const history = useHistory();
  const [repotoriesData, SetRepotoriesData] = useState();
  const HandleStarts = (data) => {
    if (data) {
      let totalStars = data.reduce((acumulated, current) => ({
        stars: acumulated.stars + current.stars,
      }));
      return totalStars.stars;
    }
    return 0;
  };
  useEffect(() => {
    request(`https://api.github.com/users/${id}/repos`, "get")
      .then((data) => SortRepos(data.data))
      .then((sortedData) => SetRepotoriesData(sortedData))
      .catch((err) => history.push({ pathname: "/" }));
  }, []);
  useEffect(() => {
    SetStars(HandleStarts(repotoriesData));
  }, [repotoriesData]);

  return (
    <RepositoriesContainer>
      {repotoriesData?.map((repo) => (
        <RepositoriesCard key={repo.id} repo={repo} />
      ))}
    </RepositoriesContainer>
  );
};
export default Repositories;
