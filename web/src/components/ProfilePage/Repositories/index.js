import { RepositoriesContainer } from "./styled";
import RepositoriesCard from "./RepositoriesCard/index";
import { useState } from "react";
const Repositories = () => {
  const [repotoriesData, SetRepotoriesData] = useState([
    {
      id: 1,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 150,
      updated: 30,
    },
    {
      id: 2,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 3,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 4,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 5,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 6,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 7,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 8,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 9,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 10,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 11,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 12,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 13,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 14,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 15,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 16,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 17,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 18,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 19,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 20,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 21,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 22,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 23,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 24,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
    {
      id: 25,
      title: "Repository Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.",
      stars: 100,
      updated: 30,
    },
  ]);
  return (
    <RepositoriesContainer>
      {repotoriesData.map((repo) => (
        <RepositoriesCard key={repo.id} repo={repo} />
      ))}
    </RepositoriesContainer>
  );
};
export default Repositories;
