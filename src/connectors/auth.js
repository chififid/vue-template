// import { axiosPostRequest, axiosGetRequest } from "@/helpers/connectors";

async function logoutRequest() {
  // return await axiosPostRequest("/api/auth/logout/", {});
  return;
}

async function sessionRequest() {
  // return await axiosGetRequest("/api/auth/session/", {});
  return true;
}

async function loginRequest({ username, password }) {
  // return await axiosPostRequest("/api/auth/login/", {
  //   username: username,
  //   password: password,
  // });
  void (username, password);
  throw {
    global: "Testing mode!",
    fields: { username: "Your username is used!" },
  };
}

async function signUpRequest({ username, email, password }) {
  // return await axiosPostRequest("/api/auth/signup/", {
  //   username: username,
  //   email: email,
  //   password: password,
  // });
  return username, email, password;
}

export { loginRequest, signUpRequest, logoutRequest, sessionRequest };
