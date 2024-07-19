import axios from "axios";

const BASE_URL = import.meta.env.VITE_VUE_APP_BASEURL;

async function axiosRequest({
  method,
  subUrl,
  headers = {},
  data = {},
  params = {},
}) {
  return await axios({
    method: method,
    url: BASE_URL + subUrl,
    headers: headers,
    data: data,
    params: params,
  });
}

async function axiosGetRequest(subUrl, params) {
  return await axiosRequest({
    method: "get",
    subUrl: subUrl,
    params: params,
  });
}

async function axiosPostRequest(subUrl, data) {
  const headers = {
    "Content-Type": "application/json",
  };

  return await axiosRequest({
    method: "post",
    subUrl: subUrl,
    headers: headers,
    data: data,
  });
}

export { axiosGetRequest, axiosPostRequest };
