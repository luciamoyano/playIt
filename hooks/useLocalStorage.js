export const useLocalStorage = () => {
  const saveToken = (accessToken) => {
    localStorage.setItem("token", accessToken);
  };
  const getToken = localStorage.getItem("token");
  return [saveToken, getToken];
};
