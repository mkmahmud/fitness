export const setToLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
