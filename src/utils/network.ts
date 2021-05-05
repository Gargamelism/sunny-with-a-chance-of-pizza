
async function getJSONRequest(url: string) {
  url = process.env.REACT_APP_CORS_PROXY + url;

  let parsedResponse = {};

  try {
    const response = await fetch(url);

    if (response.ok) {
      parsedResponse = await response.json();
    }
  } catch (err) {
    console.error(err);
  }

  return parsedResponse;
}

export { getJSONRequest };