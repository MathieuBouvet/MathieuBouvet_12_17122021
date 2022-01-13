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
 * @param {string} route - the route to fetch
 * @param {function} [formater=the identity function] - a function receiving the fetched data. Its result will be dispatched to the store
 * @returns Object
 */
function useApi(route, formater = data => data) {
  const apiClient = getApiClientService();

  const [state, dispatch] = useReducer(dataFetchingReducer, initialState);

  const { isFetching, data, error } = state;

  const refresh = () => dispatch(actions.refreshRequested());

  useEffect(() => {
    if (!isFetching && data == null && error == null) {
      dispatch(actions.fetchingStarted());
      apiClient
        .get(route)
        .then(data => {
          dispatch(actions.dataFetched(formater(data)));
        })
        .catch(err => {
          dispatch(actions.fetchFailed(err));
        });
    }
  }, [isFetching, data, route, apiClient, error, formater]);

  return { state, refresh };
}

export default useApi;
