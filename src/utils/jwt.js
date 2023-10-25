import jwtDecode from "jwt-decode";

export const decodeData = (tocken) => {
  return jwtDecode(tocken);
};
