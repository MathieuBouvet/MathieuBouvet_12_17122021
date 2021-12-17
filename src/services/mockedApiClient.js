import { mockedData } from "../data/mockedData";

/**
 * Get the data at the given url
 * @param {string} url
 * @returns {Promise<unknown>} A promise that resolves to the matching data, and rejects when the data can't be found
 */
function get(url) {
  const [, ressource, id, subRessource = "index"] = url.split("/");

  const data = mockedData[ressource]?.[id]?.[subRessource];

  if (data != null) {
    return Promise.resolve(data);
  }
  return Promise.reject({
    status: 404,
    statusText: "Not Found",
  });
}

const mockedApiClient = {
  get,
};

export default mockedApiClient;
