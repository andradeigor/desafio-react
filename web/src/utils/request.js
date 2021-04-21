import axios from "axios";

const request = (url, method, data) => {
  return axios({
    method,
    url,
    data,
  });
};
export default request;
