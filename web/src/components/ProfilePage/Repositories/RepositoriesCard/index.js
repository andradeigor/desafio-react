import {
  CardArea,
  CardContainer,
  CardTitleContainer,
  CardTitle,
  CardTitleLink,
  CardDescriptionContainer,
  CardDescription,
  RepositoriesDivider,
  CardStatsArea,
  CardStatsItem,
  CardStatsDot,
} from "./styled";
import MySvg from "../../../../utils/MySvg";
const RepositoriesCard = ({ repo }) => {
  return (
    <CardArea>
      <CardContainer>
        <CardTitleContainer>
          <CardTitle>
            <CardTitleLink href={repo.titlelink} target="_blank">
              {repo.title}
            </CardTitleLink>
          </CardTitle>
        </CardTitleContainer>
        <CardDescriptionContainer>
          <CardDescription>
            {repo.description
              ? repo.description
              : "Repositorie with no description"}
          </CardDescription>
        </CardDescriptionContainer>
        <CardStatsArea>
          <MySvg
            Mypaths={[
              "M14.7012 4.47658C14.6191 4.52345 14.5254 4.62306 14.4902 4.70509C14.4375 4.82228 12.873 9.59767 12.2461 11.5547L12.0644 12.1289L8.08593 12.1406L4.10155 12.1582L3.94335 12.3164C3.74999 12.5156 3.72655 12.8203 3.89648 13.0137C3.96093 13.0781 5.38476 14.127 7.06054 15.3399C8.73632 16.5469 10.1426 17.5723 10.1894 17.6133C10.2539 17.6719 10.0723 18.293 9.05859 21.4043C8.39648 23.4551 7.85155 25.1836 7.85155 25.2422C7.85155 25.3067 7.92187 25.4473 8.00976 25.5469C8.14452 25.711 8.1914 25.7285 8.40234 25.711C8.61327 25.6934 9.05273 25.3945 11.8242 23.3906L15 21.0879L18.1699 23.3789C20.373 24.9727 21.3984 25.6817 21.5332 25.7051C21.7969 25.7461 22.0312 25.5235 22.0312 25.2422C22.0312 25.1367 21.4922 23.3906 20.8301 21.3574C20.1738 19.3301 19.6523 17.6543 19.6758 17.6309C19.6992 17.6133 21.1348 16.5703 22.875 15.3164C24.6094 14.0625 26.0566 12.9785 26.0918 12.9082C26.1914 12.6914 26.0918 12.3692 25.8809 12.2461C25.6992 12.1348 25.5527 12.1289 21.7676 12.1289H17.8418L16.6465 8.41994C15.8672 6.01173 15.4043 4.66994 15.3281 4.58791C15.1699 4.41798 14.8945 4.37111 14.7012 4.47658ZM16.0898 9.8965C16.9336 12.5274 17.0976 12.9785 17.2207 13.0606C17.3496 13.1426 17.7422 13.1602 20.6367 13.1836L23.9062 13.2129L21.2754 15.1113C19.4062 16.4531 18.6211 17.0567 18.5742 17.168C18.5156 17.3145 18.6211 17.6777 19.5117 20.4492C20.0684 22.1602 20.5078 23.5723 20.4961 23.584C20.4902 23.5899 19.2949 22.7461 17.8476 21.7031C15.6621 20.127 15.1875 19.8047 15.0234 19.8047C14.8242 19.8047 14.7363 19.8633 10.9453 22.6055C10.1777 23.1563 9.55077 23.5781 9.55077 23.5488C9.55077 23.5137 9.98437 22.1367 10.5176 20.4961C11.0508 18.8496 11.4844 17.4141 11.4844 17.3145C11.4844 17.168 11.4375 17.0801 11.291 16.957C11.1855 16.8633 9.98437 15.9844 8.61913 15L6.14062 13.2129L9.45702 13.1836L12.7734 13.1543L12.9141 13.0078C13.0195 12.8965 13.3008 12.0879 14.0391 9.80275C14.584 8.11525 15.041 6.76173 15.0644 6.78517C15.082 6.80861 15.5449 8.209 16.0898 9.8965Z",
            ]}
            width={30}
            viewBox="0 0 30 30"
            heigh={30}
            color=" #8190A5"
          />
          <CardStatsItem>{repo.stars} Stars</CardStatsItem>
          <CardStatsDot>•</CardStatsDot>
          <CardStatsItem>Updated {repo.updated} days ago</CardStatsItem>
        </CardStatsArea>
        <RepositoriesDivider />
      </CardContainer>
    </CardArea>
  );
};
export default RepositoriesCard;
