import axios from "axios";

/**
 * Get the data at the given url
 * @param {string} url
 * @returns {Promise<unknown>} A promise that resolves to the matching data, and rejects when the data can't be found
 */
async function get(url) {
  try {
    const response = await axios.get(url, {
      baseURL: process.env.REACT_APP_API_URL,
    });
    return response.data.data;
  } catch (err) {
    return Promise.reject({
      status: err.response.status,
      statusText: err.response.statusText,
    });
  }
}

const realApiClient = {
  get,
};

export default realApiClient;
