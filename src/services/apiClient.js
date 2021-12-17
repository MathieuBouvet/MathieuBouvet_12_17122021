import mockedApiClient from "./mockedApiClient";
import realApiClient from "./realApiClient";

/**
 * Get the real or the mocked api client, depending of the .env configuration
 */
function getApiClientService() {
  const mockApiClient = process.env.REACT_APP_MOCK_API_CLIENT === "true";

  return mockApiClient ? mockedApiClient : realApiClient;
}

export default getApiClientService;
