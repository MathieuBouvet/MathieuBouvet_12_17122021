const initialState = {
  isFetching: false,
  error: null,
  data: null,
};

function dataFetchingReducer(state, action) {
  switch (action.type) {
    case "FETCHING_STARTED": {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case "DATA_FETCHED": {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload,
      };
    }
    case "FETCH_FAILED": {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        data: null,
      };
    }
    case "REFRESH_REQUESTED": {
      return {
        ...state,
        isFetching: false,
        data: null,
      };
    }
    default:
      return state;
  }
}

function fetchingStarted() {
  return {
    type: "FETCHING_STARTED",
  };
}

function dataFetched(data) {
  return {
    type: "DATA_FETCHED",
    payload: data,
  };
}

function fetchFailed(error) {
  return {
    type: "FETCH_FAILED",
    paylaod: error,
  };
}

function refreshRequested() {
  return {
    type: "REFRESH_REQUESTED",
  };
}

export default dataFetchingReducer;

export const actions = {
  fetchingStarted,
  dataFetched,
  fetchFailed,
  refreshRequested,
};

export { initialState };
