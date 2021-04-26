import { RepositoriesContainer } from "./styled";
import { useHistory } from "react-router-dom";
import RepositoriesCard from "./RepositoriesCard/index";
import axios from "axios";
import { useEffect, useState } from "react";
import SortRepos from "../../../utils/SortRepos";

const Repositories = ({ profileData }) => {
  const history = useHistory();
  const [repotoriesData, SetRepotoriesData] = useState();
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${profileData.login}/repos`)
      .then((data) => SortRepos(data.data))
      .then((sortedData) => SetRepotoriesData(sortedData))
      .catch((err) => history.push({ pathname: "/" }));
  }, []);

  return (
    <RepositoriesContainer>
      {repotoriesData?.map((repo) => (
        <RepositoriesCard key={repo.id} repo={repo} />
      ))}
    </RepositoriesContainer>
  );
};
export default Repositories;
