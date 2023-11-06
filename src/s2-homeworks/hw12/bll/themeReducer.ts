const initState = {
  themeId: 1,
};

export const themeReducer = (
  state: initStateType = initState,
  action: ActionType
): initStateType => {
  switch (action.type) {
    case "SET_THEME_ID": {
      return {
        ...state,
        themeId: action.id,
      };
    }
    default:
      return state;
  }
};
type initStateType = { themeId: number };
type ActionType = { type: "SET_THEME_ID"; id: number };

export const changeThemeId = (id: number): ActionType => ({
  type: "SET_THEME_ID",
  id,
});
