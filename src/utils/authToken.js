const getUserToken = () => {
  return localStorage.getItem("token");
};

const setUserToken = (token) => {
  return localStorage.setItem("token", token);
};
// log out
const clearUserToken = () => {
  return localStorage.setItem("token", "");
};

export { getUserToken, setUserToken, clearUserToken };
