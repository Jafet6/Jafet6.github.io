
const apiRequest = (subredditSearch) => {
  const URL = `https://www.reddit.com/r/${subredditSearch}.json`;
  return fetch(URL).then((response) => (
    response
      .json()
      .then((dataJson) => (response.ok ? Promise.resolve(dataJson) : Promise.reject(dataJson)))
  ))
};

export default apiRequest;
