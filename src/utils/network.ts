
async function getJSONRequest(url: string) {
  if (process.env.NODE_ENV === 'development') {
    url = process.env.REACT_APP_DEV_CORS_PROXY + url;
  }

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