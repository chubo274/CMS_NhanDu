import axios from "axios";
import { BASE_URL } from "Service/ServiceURL";

export async function refreshToken() {
  const url = BASE_URL + "auth/refresh-tokens";
  const res = await axios.post(url, {
    refreshToken: localStorage.getItem("refreshtoken"),
  });
  // .then((data) => {
  //   const token = data.data.access.token;
  //   console.log(data.data.access);
  //   return token;
  // });
  console.log("res", res);
  // localStorage.setItem("token", res.data.tokens.access.token);
  localStorage.setItem("refreshtoken", res.data.refresh.token);
  localStorage.setItem("expiresAt", res.data.access.expires);
  window.location.reload(false);
  return res.data.access.token;
}

export default refreshToken;
