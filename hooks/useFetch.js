export const useFetch = () => {
  return async function fetchData(url, setter, accessToken) {
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    const dataJson = await data.json();
    await setter(dataJson);
  };
};
