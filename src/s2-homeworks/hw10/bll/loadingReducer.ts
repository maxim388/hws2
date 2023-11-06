type LoadingReducerType = {
  isLoading: boolean;
};

const initState: LoadingReducerType = {
  isLoading: false,
};

export const loadingReducer = (
  state: LoadingReducerType = initState,
  action: LoadingActionType
): LoadingReducerType => {
  // fix any
  switch (action.type) {
    case "CHANGE_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    // пишет студент  // need to fix

    default:
      return state;
  }
};

type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: "CHANGE_LOADING",
  isLoading,
});
