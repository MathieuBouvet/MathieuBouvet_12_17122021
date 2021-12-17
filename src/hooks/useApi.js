import { useReducer, useEffect } from "react";
import getApiClientService from "../services/apiClient";

import dataFetchingReducer, {
  initialState,
  actions,
} from "./helpers/dataFetchingReducer";

/**
 * A hook to handle data fetching. It will fetch the requested route if needed
 * (ie if it is not already fetching the data, and if the data is null).
 * It returns an object containing the state and a function to refresh it
 * (ie it triggers a data refetch).
 * @param {string} route
 * @returns Object
 */
function useApi(route) {
  const apiClient = getApiClientService();

  const [state, dispatch] = useReducer(dataFetchingReducer, initialState);

  const { isFetching, data } = state;

  const refresh = () => dispatch(actions.refreshRequested());

  useEffect(() => {
    if (!isFetching && data == null) {
      dispatch(actions.fetchingStarted());
      apiClient
        .get(route)
        .then(data => {
          dispatch(actions.dataFetched(data));
        })
        .catch(err => {
          dispatch(actions.fetchFailed(err));
        });
    }
  }, [isFetching, data, route, apiClient]);

  return { state, refresh };
}

export default useApi;
