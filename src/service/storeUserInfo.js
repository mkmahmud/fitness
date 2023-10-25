import { getFromLocalStorage, setToLocalStorage } from "../utils/LocalStorage";
import { decodeData } from "../utils/jwt";
// Store tocken in local storage
export const storeUserInfo = (data) => {
  return setToLocalStorage("access_token", data.jwtTocken);
};

// Get User Info from local storage
export const getUserInfo = () => {
  const tocken = getFromLocalStorage("access_token");
  if (tocken) {
    const data = decodeData(tocken);
    return data;
  }
  return "";
};

// get Logged in user info from local storage
export const isLoggedUser = () => {
  const tocken = getFromLocalStorage("access_token");
  if (tocken) {
    return !!tocken;
  }
};
